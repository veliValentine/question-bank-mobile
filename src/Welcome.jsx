import { StyleSheet, Text, View } from 'react-native';

const Welcome = () => {
  const currentYear = new Date().getFullYear()
  const copyrightYears = currentYear === 2023 ? '2023' : `2023-${currentYear}`;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.textTitle}>Flying Valentine Question Bank</Text>
      </View>
      <Text style={styles.textCopyright}>{`Copyright ${copyrightYears} by N.J. Valentine`}</Text>
    </View>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4E0B9',
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    padding: 50
  },
  text: {
    padding: 10,
    color: 'black',
  },
  textTitle: {
    padding: 10,
    color: 'black',
    fontWeight: 'bold'
  },
  textCopyright: {
    padding: 10,
    color: 'black',
    marginTop: 200
  },
});