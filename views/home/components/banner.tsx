import React, { FC, memo } from "react";
import { StyleSheet, View } from "react-native";
import Toolbar from "./toolbar";
type IProps = {};
const Index: FC<IProps> = () => {
  return (
    <View style={styles.banner}>
      <Toolbar />
    </View>
  );
};
Index.displayName = "Index";
export default memo(Index);

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#000",
  },
});
