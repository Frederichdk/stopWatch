import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

const Card = () => <View style={styles.card} />;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.lableBackground}>
        <Text style={styles.Text}>StopWatch</Text>
      </View>
      <View style={styles.LapRow}>
        <View style={styles.LapContainer}>
          <Text style={styles.LapText}>00:00.00</Text>
          <Text style={styles.LapText}>00:00.00</Text>
          <Text style={styles.LapText}>00:00.00</Text>
          <Text style={styles.LapText}>00:00.00</Text>
          <Text style={styles.LapText}>00:00.00</Text>
          <Text style={styles.LapText}>00:00.00</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>00:00.00</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.tButton}>
          <Text style={styles.btnText}>Pause</Text>
        </View>
        <View style={styles.tButton}>
          <Text style={styles.btnText}> Start</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.tButton}>
          <Text style={styles.btnText}>Reset</Text>
        </View>
        <View style={styles.tButton}>
          <Text style={styles.btnText}>Lap</Text>
        </View>
      </View>
      <View style={styles.row}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#2f3e46",
  },
  row: {
    flex: 1,
    marginVertical: 5,
    flexDirection: "row",
  },
  LapRow: {
    flex: 2,
    marginVertical: 5,
    flexDirection: "row",
  },
  Text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  lableBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#84a98c",
    flex: 0.5,
    margin: 5,
  },
  tButton: {
    backgroundColor: "#cad2c5",
    padding: 10,
    borderRadius: 70,
    flex: 1,
    margin: 10,
    marginHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  timeContainer: {
    backgroundColor: "#52796f",
    flex: 1,
    margin: 5,
    marginHorizontal: 20,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  LapContainer: {
    backgroundColor: "#52796f",
    flex: 1,
    margin: 5,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
  },
  LapText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
  },
});
