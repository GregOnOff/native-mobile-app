import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [addedGoals, setAddedGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setAddedGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function nuclearStrike() {
    setAddedGoals([]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"enter your goal"}
          onChangeText={goalInputHandler}
        />
        <Button title={"new goal+"} onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={addedGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.listItem} key={itemData.item}>
                <Text style={{ color: "white" }}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
      </View>
      <Button title={"clear list"} onPress={nuclearStrike} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: "auto",
    padding: 50,
    alignItems: "center",
  },
  input: {
    textAlign: "center",
    backgroundColor: "#d3d3d3",
    width: "70%",
    height: 40,
    padding: 5,
    marginLeft: 25,
    marginTop: 15,
    marginBottom: 20,
    marginRight: 5,
    color: "black",
    borderRadius: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 22,
  },
  listContainer: {
    flex: 4,
    paddingTop: 10,
  },
  listItem: {
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    padding: 8,
    backgroundColor: "tomato",
    borderRadius: 5,
  },
});
