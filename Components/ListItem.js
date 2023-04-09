import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ListItem({ itemData, setAddedGoals, addedGoals }) {
  function deleteItemHandler(id) {
    setAddedGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <Pressable
      onPress={() => deleteItemHandler(itemData.item.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.listItem} key={itemData.item.id}>
        <Text style={{ color: "white" }}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    padding: 8,
    backgroundColor: "tomato",
    borderRadius: 5,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
