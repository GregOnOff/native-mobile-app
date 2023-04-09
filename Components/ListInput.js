import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export default function ListInput({
  setEnteredGoalText,
  setAddedGoals,
  enteredGoalText,
}) {
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setAddedGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    console.log("hello pebbles");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={"enter your goal"}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title={"new goal+"} onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 22,
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
});
