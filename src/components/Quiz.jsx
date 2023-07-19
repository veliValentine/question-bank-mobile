import { StyleSheet, Text, View, BackHandler } from 'react-native';
import { useEffect, useState } from 'react';
import Question from './Question';

const Quiz = ({
  topic,
  questions,
  finishQuiz,
  updateAnswer,
  backAction,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [question, setQuestion] = useState(questions[questionIndex])

  useEffect(() => {
    const backActionResponse = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backActionResponse.remove()
  }, [])

  useEffect(() => {
    setQuestion(questions[questionIndex])
  }, [questionIndex])

  const isFirstQuestion = questionIndex === 0;
  const isLastQuestion = questionIndex === questions.length - 1;

  const setPreviousQuestion = () => {
    if (isFirstQuestion) {
      return
    }
    setQuestionIndex(questionIndex - 1)
  }

  const setNextQuestion = () => {
    if (isLastQuestion) {
      return
    }
    setQuestionIndex(questionIndex + 1)
  }

  const saveChoice = (isCorrectChoice, choice) => {
    const data = { question, correct: isCorrectChoice }
    updateAnswer(questionIndex, data)
    setQuestion({ ...question, chosen: choice })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${topic} ${questionIndex + 1}/${questions.length}`}</Text>
      <Question
        key={questionIndex}
        data={question}
        previousQuestion={isFirstQuestion ? backAction : setPreviousQuestion}
        nextQuestion={isLastQuestion ? finishQuiz : setNextQuestion}
        isFirstQuestion={isFirstQuestion}
        isLastQuestion={isLastQuestion}
        saveChoice={saveChoice}
      />
    </View>
  );
}

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});