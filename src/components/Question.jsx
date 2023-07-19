import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const Question = ({
  data,
  nextQuestion,
  previousQuestion,
  isFirstQuestion,
  isLastQuestion,
  saveChoice
}) => {
  const { answers } = data;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {answers.map((answer) => Option(answer, saveChoice))}
      </ScrollView >
      {Buttons({ previousQuestion, nextQuestion, isFirstQuestion, isLastQuestion })}
    </View>
  )
}

const Option = ({ choice, isCorrect }, saveChoice) => {
  return (
    <TouchableOpacity
      key={choice}
      onPress={() => saveChoice(isCorrect)}
      style={styles.containerAnswer}
    >
      <Text style={styles.answer}>{choice}</Text>
    </TouchableOpacity>
  )
}

const Buttons = ({ previousQuestion, nextQuestion, isFirstQuestion, isLastQuestion }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        style={styles.button}
        onPress={previousQuestion}
        disabled={isFirstQuestion}
      >
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableHighlight>
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
