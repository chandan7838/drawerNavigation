import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
  },
  drawer: {
    flex: 1,
    position: 'absolute',
    width: width + 100,
    height: height + 100,
    backgroundColor: '#1A1A2E',
    paddingTop: 80,
    paddingLeft: 10,
  },
  menuItem: {
    fontSize: 20,
    color: 'white',
    marginVertical: 15,
    paddingLeft: 16,
  },
  mainScreen: {
    flex: 1,
    backgroundColor: 'white',
    width: width + 60,
    height: height + 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    color: 'white',
    fontSize: 22,
    fontWeight: '900',
    marginLeft: 40,
    marginBottom: 20,
  },
  drawerItem: {
    backgroundColor: '#301F2C',
    borderRadius: 12,
    width: 140,
  },
  tabs: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 20,
    overflow: 'hidden',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  }
});
