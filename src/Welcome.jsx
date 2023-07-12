import { StyleSheet, Text, View } from 'react-native';

const Welcome = () => {
  const currentYear = new Date().getFullYear()
  const copyrightYears = currentYear === 2023 ? '2023' : `2023-${currentYear}`;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to</Text>
      <Text style={styles.text}>Flying Valentine Question Bank</Text>
      <Text style={styles.textCopyright}>{`Copyright ${copyrightYears} by N.J. Valentine`}</Text>
    </View>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    height: "100%",
    padding: 50,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 50
  },
  text: {
    padding: 10,
    color: "white",
  },
  textCopyright: {
    padding: 10,
    color: "white",
    marginTop: 200
  },
});