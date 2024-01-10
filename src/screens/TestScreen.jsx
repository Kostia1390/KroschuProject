import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Typography } from "../Typography";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from 'react-i18next';
import BackArrowPurpleSvg from "../../assets/icons/backArrowPurple.svg";
import { useNavigation } from "@react-navigation/native";

const TestScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();


  return (
    <LinearGradient
      colors={["#ffffff", "#ffffff"]}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowPurpleSvg width={30} height={30} />
        </TouchableOpacity>
        <Typography f24 semibold color="#000000" textAlign="center">
        {t('test.title')}
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
    borderBottomWidth: 8,
    borderBottomColor: "#fff",
    paddingBottom: 10,
  },
  hourlyForecast: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingVertical: 10,
    alignItems: "center",
  },
  lastHourlyForecast: {
    borderBottomWidth: 0,
  },
  lastDailyForecast: {
    borderBottomWidth: 0,
  },
});

export default TestScreen;
