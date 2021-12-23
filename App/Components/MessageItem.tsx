import React from "react";
import { Text, View } from "react-native";

interface MessageItemProps {
  message: string;
}

const MessageItem: React.FC<MessageItemProps> = (props) => {
  return (
    <View>
      <Text>{props.message}</Text>
    </View>
  );
};

export default MessageItem;
