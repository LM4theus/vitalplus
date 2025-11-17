import React, { ReactNode } from "react";
import {
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from "react-native";

export type CardState = "neutral" | "active" | "late" | "completed";

interface CardProps {
  title: ReactNode;
  description: ReactNode;
  width?: number;
  height?: number;
  state: CardState;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
}

const getBackgroundColor = (state: CardState): string => {
  switch (state) {
    case "neutral":
      return "#CCCCCC";
    case "active":
      return "#F8D29C";
    case "late":
      return "#FFA9BF";
    case "completed":
      return "#AED093";
    default:
      return "#CCCCCC";
  }
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  width = 279,
  height = 117,
  state,
  onPress,
  style,
  textStyle,
  descriptionStyle,
}) => {
  const backgroundColor = getBackgroundColor(state);

  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          width,
          height,
          backgroundColor,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
          padding: 10,
        },
        style,
      ]}
    >
      <View style={{ alignItems: "center" }}>
        <Text
          style={[
            {
              color: "black",
              fontSize: 25,
              fontWeight: "800",
              textAlign: "center",
            },
            textStyle,
          ]}
        >
          {title}
        </Text>

        <Text
          style={[
            {
              color: "black",
              fontSize: 20,
              marginTop: 5,
              textAlign: "center",
            },
            descriptionStyle,
          ]}
        >
          {description}
        </Text>
      </View>
    </Pressable>
  );
};

export default Card;
