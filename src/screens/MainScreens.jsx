import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector} from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import WeatherWindows from "../components/WeatherWindows";
import { Typography } from "../Typography";
import Settings from "../../assets/icons/settings.svg";
import SettingsModal from "../components/SettingsModal";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/icons/LogoSvg.svg";

const MainScreens = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);




  return (
    <LinearGradient
      colors={isDarkTheme ? ["#000", "#333"] : ["#fefdfd", "#ffffff"]}
      style={styles.container}
    >
            <Logo style={styles.logo} width={300} height={120}/>

      <View style={{ flexDirection: "row", gap: 40 }}>
        <View  style={styles.inputWrapper} >
      </View>
        <View style={styles.settingsWrapper}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Settings width={40} height={40} />
          </TouchableOpacity>
        </View>
      </View>
    
      <TouchableOpacity onPress={() => navigation.navigate("LearnProgram")}>
        <WeatherWindows title="Навчальна програма" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("TestScreen")}>
        <WeatherWindows title="Тести" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Break")}>
        <WeatherWindows title="Перерви" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("OfficeInfo")}
      >
        <WeatherWindows title="Інформація про кабінети" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("PhoneNumber")}
      >
        <WeatherWindows title="Номер телефону тренера" />
      </TouchableOpacity>

      <SettingsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </LinearGradient>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 40,
    paddingTop: 150,
  },
  logo: {
    position: 'absolute',
    top: 50,
  },
  weatherContainer: {
    marginTop: 20,
  },
  settingsWrapper: {
    backgroundColor: "#563187",
    borderRadius: 7,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
    marginBottom: 40,
  },
  inputWrapper: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
});

export default MainScreens;
