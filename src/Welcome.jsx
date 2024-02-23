import { StyleSheet, Text, View } from 'react-native';

const Welcome = () => {
  const currentYear = new Date().getFullYear()
  const copyrightYears = currentYear === 2023 ? '2023' : `2023-${currentYear}`;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.textTitle}>Flying Valentine</Text>
        <Text style={styles.textTitle}>Question Bank</Text>
      </View>
      <Text style={styles.textCopyright}>{`Copyright ${copyrightYears} by N.J. Valentine`}</Text>
    </View>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    padding: 50
  },
  text: {
    padding: 10,
    color: 'white',
  },
  textTitle: {
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30
  },
  textCopyright: {
    padding: 10,
    color: 'white',
    marginTop: 200,
    fontSize: 10,
  },
});