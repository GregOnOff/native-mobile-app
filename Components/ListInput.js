import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function ListInput({
  setEnteredGoalText,
  setAddedGoals,
  enteredGoalText,
  visibleModal,
  setVisibleModal,
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
    setVisibleModal(false);
  }

  return (
    <Modal visible={visibleModal} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder={"enter your goal"}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.defaultBtn}>
            <Button title={"Cancel"} onPress={() => setVisibleModal(false)} />
          </View>
          <View style={styles.defaultBtn}>
            <Button title={"new goal+"} onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 22,
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    textAlign: "center",
    backgroundColor: "#d3d3d3",
    width: "90%",
    height: 40,
    padding: 5,
    marginTop: 15,
    marginBottom: 20,
    marginRight: 5,
    color: "black",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 10,
    gap: 35,
  },
  defaultBtn: {
    width: "30%",
    backgroundColor: "#999",
    marginHorizontal: 8,
    borderRadius: 10,
  },
});
