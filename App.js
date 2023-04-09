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
import ListItem from "./Components/ListItem";
import ListInput from "./Components/ListInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [addedGoals, setAddedGoals] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  function preInputHandler() {
    setVisibleModal(true);
  }

  function nuclearStrike() {
    setAddedGoals([]);
  }

  return (
    <View style={styles.container}>
      <Button
        title={"new Todo"}
        color={"limegreen"}
        onPress={preInputHandler}
      />

      {visibleModal && (
        <ListInput
          setAddedGoals={setAddedGoals}
          enteredGoalText={enteredGoalText}
          setEnteredGoalText={setEnteredGoalText}
          visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
        />
      )}
      <View style={styles.listContainer}>
        <FlatList
          data={addedGoals}
          renderItem={(itemData) => {
            return (
              <ListItem
                itemData={itemData}
                setAddedGoals={setAddedGoals}
                addedGoals={addedGoals}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
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
  listContainer: {
    flex: 4,
    paddingTop: 10,
  },
});
