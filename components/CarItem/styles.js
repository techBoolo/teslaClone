import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '20%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '500'
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttonsContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    alignItems: 'center'
  }
})

export default styles;
