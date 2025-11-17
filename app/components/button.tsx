import React, { ReactNode } from "react";
import { Pressable, Text, StyleProp, ViewStyle, TextStyle } from "react-native";

interface CustomButtonProps {
  children: ReactNode;
  width?: number;
  height?: number;
  backgroundColor?: string;
  borderRadius?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  width = 150,
  height = 50,
  backgroundColor = "#EBEBEB",
  borderRadius = 8,
  onPress,
  style,
  textStyle,
}) => (
  <Pressable
    onPress={onPress}
    style={[
      {
        width,
        height,
        backgroundColor,
        borderRadius,
        justifyContent: "center",
        alignItems: "center",
      },
      style,
    ]}
  >
    {typeof children === "string" ? (
      <Text style={[{ color: "#fff", fontSize: 16 }, textStyle]}>
        {children}
      </Text>
    ) : (
      children
    )}
  </Pressable>
);

export default CustomButton;
