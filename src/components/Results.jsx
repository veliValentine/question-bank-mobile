import { useEffect } from 'react';
import { BackHandler, FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Results = ({
  results,
  questions,
  onNewQuiz,
  backAction
}) => {
  const answers = Object.values(results)
  const totalQuestions = questions.length
  const correctQuestions = answers.filter(({ correct }) => correct).length

  useEffect(() => {
    const backActionResponse = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backActionResponse.remove()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results:</Text>
      <Text style={styles.resultText}>{`${correctQuestions} out of ${totalQuestions} correct`}</Text>
      <Answers questions={questions} />
      <BottomButtons onNewQuiz={onNewQuiz} />
    </View>
  )
}

const Answers = ({
  questions
}) => {
  return (
    <View style={styles.scrollContainer}>
      <Text>Correct answers:</Text>
      <FlatList
        data={questions}
        renderItem={CorrectAnswer}
      />
    </View>
  )
}

const CorrectAnswer = ({ item }) => {
  const { title, answers: questionAnswer } = item
  if (questionAnswer === undefined) {
    return null
  }
  const found = questionAnswer.find(({ isCorrect }) => isCorrect)
  if (found === undefined) {
    return null
  }
  const { choice } = found
  return (
    <View
      key={title}
      style={styles.questionContainer}

    >
      <Text style={styles.questionTitle}>{title}</Text>
      <Text>{choice}</Text>
    </View>
  )
}

const BottomButtons = ({
  onNewQuiz
}) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      style={styles.button}
      onPress={onNewQuiz}
    >
      <Text style={styles.buttonText}>New Quiz</Text>
    </TouchableHighlight>
  </View>
)

export default Results;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A8A196',
    borderRadius: 20,
    padding: 10,
    flex: 1
  },
  title: {
    fontWeight: 'bold',
  },
  scrollContainer: {
    borderRadius: 10,
    flex: 1,
  },
  questionContainer: {
    borderRadius: 10,
    backgroundColor: '#7D7463',
    padding: 20,
    margin: 5,
  },
  questionTitle: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
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