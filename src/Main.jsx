import { StyleSheet } from 'react-native';
import Quiz from './components/Quiz';
import topics from './topics.json'
import { useState } from 'react';

const Main = () => {
  const allTopics = Object.keys(topics)
  const [topic] = useState(allTopics[0]);

  const answers = {}

  const finishQuiz = () => {
    console.log(JSON.stringify({ answers }))
  }

  const updateAnswer = (index, data) => {
    answers[index] = data
  }

  return (
    <Quiz
      topic={topic.toUpperCase()}
      questions={topics[topic]?.questions ?? []}
      finishQuiz={finishQuiz}
      updateAnswer={updateAnswer}
    />
  )
}

export default Main;

const styles = StyleSheet.create({
});