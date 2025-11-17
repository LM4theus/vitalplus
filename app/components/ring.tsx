import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

export default function Ring({
  size = 200,
  stroke = 30,
  progress = 50,
  color = "#00ff00",
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
        {/* fundo preto */}
        <Circle fill="#000" cx={size / 2} cy={size / 2} r={radius} />

        {/* trilha */}
        <Circle
          stroke="none"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
        />

        {/* progresso */}
        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </Svg>

      {/* texto central */}
      <View style={styles.center}>
        <Text style={styles.text}>{progress}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
});
