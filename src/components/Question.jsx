import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const Question = ({
  data,
  nextQuestion,
  previousQuestion,
  isFirstQuestion,
  isLastQuestion,
  saveChoice
}) => {
  const { answers, title } = data;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>{title}</Text>
        {answers.map((answer) => Option(answer, saveChoice))}
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

const Option = ({ choice, isCorrect }, saveChoice) => {
  const [style, setStyle] = useState(styles.containerAnswer)
  const onPress = () => {
    saveChoice(isCorrect)
    const backgroundColor = isCorrect ? 'lightgreen' : '#EA9E9E'
    setStyle({ ...style, backgroundColor })
  }
  return (
    <TouchableOpacity
      key={choice}
      onPress={onPress}
      style={style}
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
