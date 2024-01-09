import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector} from "react-redux";
import { Typography } from "../Typography";
import BackArrowSvg from "../../assets/icons/backArrow.svg";
import { useNavigation } from "@react-navigation/native";

const LearnProgramScreen = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const navigation = useNavigation();


  return (
    <LinearGradient
      colors={isDarkTheme ? ["#000", "#333"] : ["#ffffff", "#ffffff"]}
      style={styles.container}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowSvg width={30} height={30} />
        </TouchableOpacity>
        <Typography f24 semibold color="#000000" textAlign="center">
          Навчальна програма
        </Typography>
        <View style={{ width: 20, height: 20 }} />
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
    paddingHorizontal: 40,
    paddingTop: 50,
  },
  hourlyWeatherItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingVertical: 10,
  },
  firstItem: {
    marginTop: 10,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
});

export default LearnProgramScreen;
