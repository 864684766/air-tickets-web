import { View, Text, Icon } from "@ant-design/react-native";
import React, { FC, memo, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";
import { getAddress } from "apis/thirdParty";
type IProps = {};
const Index: FC<IProps> = () => {
  const [address, setAddress] = useState("");
  const getCity = async () => {
    try {
      // 获取当前位置的手机权限，EXPO测试可用，其他环境下待测试
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      const latitude = location.coords.latitude.toFixed(6); //纬度
      const longitude = location.coords.longitude.toFixed(6); //经度
      const address = await getAddress({
        location: `${longitude},${latitude}`,
      }).then((response) => response.json());
      setAddress(address.city);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCity();
  }, []);

  return (
    <View style={styles.toolbar}>
      <View style={styles.toolbar_left}>
        <Text style={styles.toolbar_left_title}>{address}</Text>
        <Icon name="down" size={12} color="#fff" />
      </View>
    </View>
  );
};
Index.displayName = "Index";
export default memo(Index);

const styles = StyleSheet.create({
  toolbar: {
    display: "flex",
  },
  toolbar_left: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "flex-start",
    paddingLeft:10,
    paddingTop:2,
    paddingBottom:2
  },
  toolbar_left_title: {
    color: "#fff",
  },
});
