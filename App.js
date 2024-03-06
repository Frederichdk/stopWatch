import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  onPress,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";
import { useState, useRef } from "react";

const Card = () => <View style={styles.card} />;

export default function App() {
  StatusBar.setBarStyle("light-content", true);
  const onPress = () => {
    console.log("Button Pressed");
  };
  const [startTime, setStartTime] = useState(null);
  const intervalRef = useRef(null);
  const [now, setNow] = useState(Date.now());
  const [pause, setPause] = useState(null);
  const [running, setRunning] = useState(false);
  const [lap, setLap] = useState([]);

  function handleStart() {
    if (!running) {
      if (now == null) {
        setStartTime(Date.now());
        setNow(Date.now());
        setRunning(true);
      } else {
        setStartTime(Date.now() - (pause - startTime));
        setNow(Date.now());
        setRunning(true);
      }

      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setNow(Date.now());
      }, 10);
    }
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    setPause(Date.now());
    setRunning(false);
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    setStartTime(null);
    setNow(null);
    setPause(null);
    setRunning(false);
    setLap([]);
  }

  function handleLap() {
    if (running) {
      setLap((prevLap) => [...prevLap, secondsPassed]);
      console.log(lap);
    }
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <View style={styles.container}>
      <View style={styles.lableBackground}>
        <Text style={styles.Text}>StopWatch</Text>
      </View>
      <View style={styles.LapRow}>
        <View style={styles.LapContainer}>
          {lap.map((LapT, index) => (
            <View key={index} style={styles.lapdisplay}>
              <Text style={styles.LapText}>Lap:{index}</Text>
              <Text style={styles.LapText}>{LapT}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{secondsPassed}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.tButton} onPress={handleStop}>
          <View style={styles.tButton}>
            <Text style={styles.btnText}>Pause</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tButton} onPress={handleStart}>
          <View style={styles.tButton}>
            <Text style={styles.btnText}>Start</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.tButton} onPress={handleReset}>
          <View style={styles.tButton}>
            <Text style={styles.btnText}>Reset</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tButton} onPress={handleLap}>
          <View style={styles.tButton}>
            <Text style={styles.btnText}>Lap</Text>
          </View>
        </TouchableOpacity>
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
  lapdisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});
