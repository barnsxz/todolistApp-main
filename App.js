import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import TodoList from './components/MyTodolist';

export default function App() {
  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.container}
      >
         <View style={styles.card}>
          <TodoList />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#006f8e',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  card: {
    backgroundColor: '#0099cc',
    borderRadius: 25,
    padding: 30,
    marginVertical: 20,
    shadowColor: '#005f73',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
    width: '80%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  todoText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Arial',
  },
});
