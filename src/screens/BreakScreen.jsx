import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Typography } from "../Typography";
import { LinearGradient } from "expo-linear-gradient";
import BackArrowSvg from "../../assets/icons/backArrow.svg";
import { useNavigation } from "@react-navigation/native";

const FourteenDayWeatherScreen = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const navigation = useNavigation();




  return (
    <LinearGradient
      colors={isDarkTheme ? ["#000", "#333"] : ["#ffffff", "#fafafa"]}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowSvg width={30} height={30} />
        </TouchableOpacity>
        <Typography f24 semibold color="#000000" textAlign="center">
        Перерва
        </Typography>
        <View style={{ width: 30, height: 30 }} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
       <Typography>123</Typography>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  dailyForecast: {
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    paddingBottom: 10,
  },
  lastDailyForecast: {
    borderBottomWidth: 0,
  },
});

export default FourteenDayWeatherScreen;
