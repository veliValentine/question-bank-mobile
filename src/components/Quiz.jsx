import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import Question from './Question';

const Quiz = ({
  topic,
  questions,
  finishQuiz,
  updateAnswer
}) => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [question, setQuestion] = useState(questions[questionIndex])

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

  const saveChoice = (isCorrectChoice) => {
    const data = { question, correct: isCorrectChoice }
    updateAnswer(questionIndex, data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Topic "${topic}" contains ${questions.length} questions`}</Text>
      <Text style={styles.title}>{`${topic} questions`}</Text>
      <Question
        key={questionIndex}
        data={question}
        previousQuestion={setPreviousQuestion}
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