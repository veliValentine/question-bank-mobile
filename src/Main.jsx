import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Quiz from './components/Quiz';
import topics from './topics.json'
import { useState } from 'react';
import Results from './components/Results';

const PAGES = {
  QUIZ: 'quiz',
  RESULTS: 'results'
}

const Main = () => {
  const [page, setPage] = useState(PAGES.QUIZ)
  const [answers, setAnswers] = useState({})
  const allTopics = Object.keys(topics)
  const [topic] = useState(allTopics[0]);
  const [questions] = useState(topics[topic]?.questions ?? [])

  const updateAnswer = (index, data) => {
    const newAnswers = { ...answers, [index]: data }
    setAnswers(newAnswers)
  }

  const finishQuiz = () => {
    setPage(PAGES.RESULTS)
  }

  if (page === PAGES.QUIZ) {
    return (
      <View style={styles.container}>
        <Quiz
          topic={topic.toUpperCase()}
          questions={questions}
          finishQuiz={finishQuiz}
          updateAnswer={updateAnswer}
        />
      </View>
    )
  }

  const onNewQuiz = () => {
    setAnswers({})
    setPage(PAGES.QUIZ)
  }

  return (
    <View style={styles.container}>
      <Results
        results={answers}
        questions={questions}
        onNewQuiz={onNewQuiz}
      />
    </View>
  )
}

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4E0B9',
    height: "100%",
    paddingTop: StatusBar.currentHeight,
    padding: 50
  }
});