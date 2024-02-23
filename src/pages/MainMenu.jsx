import { Button, Pressable, StyleSheet, Text, View } from 'react-native'

const MainMenu = ({ topics, topic, selectTopic, startQuiz }) => {
  return (
    <View style={styles.mainMenuContainer}>
      <View>
        <Text style={styles.title}>Select Questions Topic:</Text>
        {topics.map((t) => (
          <Pressable
            key={`select-topic-${t}`}
            onPress={() => selectTopic(t)}
            style={{
              ...styles.selectTopicButton,
              borderWidth: 5,
              borderColor: topic === t ? 'white' : styles.container.backgroundColor,
            }}
          >
            <Text>{`${t.toUpperCase()}`}</Text>
          </Pressable>
        ))}
      </View>
      <View>
        {topic === '' ? <Button title="" color={styles.container.backgroundColor} /> :
          <Button
            onPress={startQuiz}
            title={`Start new '${topic}' quiz`}
          />
        }
      </View>
    </View>
  )
}

export default MainMenu

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    height: "100%",
    padding: 50
  },
  mainMenuContainer: {
    padding: 10,
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    color: 'white'
  },
  selectTopicButton: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 10,
    margin: 5,
  }
});