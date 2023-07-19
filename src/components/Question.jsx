import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const Question = ({
  data,
  nextQuestion,
  previousQuestion,
  isFirstQuestion,
  isLastQuestion,
  saveChoice
}) => {
  const { answers, title, chosen } = data;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>{title}</Text>
        {answers.map((answer) => (
          <Option answer={answer} saveChoice={saveChoice} chosen={chosen} />
        ))}
      </ScrollView >
      <Buttons
        previousQuestion={previousQuestion}
        nextQuestion={nextQuestion}
        isFirstQuestion={isFirstQuestion}
        isLastQuestion={isLastQuestion}
      />
    </View>
  )
}

const Option = ({ answer, saveChoice, chosen }) => {
  const { choice, isCorrect } = answer
  let backgroundColor = styles.containerAnswer.backgroundColor
  if (choice === chosen) {
    backgroundColor = isCorrect ? 'lightgreen' : '#EA9E9E'
  }
  let containerStyle = { ...styles.containerAnswer, backgroundColor }

  const onPress = () => {
    saveChoice(isCorrect, choice)
  }
  return (
    <TouchableOpacity
      key={choice}
      onPress={onPress}
      style={containerStyle}
    >
      <Text style={styles.answer}>{choice}</Text>
    </TouchableOpacity>
  )
}

const Buttons = ({ previousQuestion, nextQuestion, isFirstQuestion, isLastQuestion }) => {
  return (
    <View style={styles.buttonContainer}>
      {isFirstQuestion ? null :
        <TouchableHighlight
          style={styles.button}
          onPress={previousQuestion}
          disabled={isFirstQuestion}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableHighlight>
      }
      <TouchableHighlight
        style={styles.button}
        onPress={nextQuestion}
      >
        <Text style={styles.buttonText}>{isLastQuestion ? 'Finish' : 'Next'}</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Question;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A8A196',
    borderRadius: 20,
    padding: 10,
    flex: 1
  },
  containerAnswer: {
    padding: 10,
    backgroundColor: '#7D7463',
    borderRadius: 20,
    margin: 10
  },
  title: {
    padding: 10,
    color: 'black',
    fontWeight: 'bold'
  },
  text: {
    padding: 10,
    color: 'black',
  },
  answer: {
    padding: 10,
  },
  selectedAnswer: {
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#9681EB',
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },
  buttonText: {
    padding: 5,
    color: 'black',
  },
});
