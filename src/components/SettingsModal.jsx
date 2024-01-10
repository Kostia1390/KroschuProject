import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  StatusBar
} from "react-native";
import { setLanguage } from "../redux/actions/languageActions"; 
import i18n from 'i18next';
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "../Typography";
import { useTranslation } from 'react-i18next';
import CloseSvg from "../../assets/icons/close.svg";

const SettingsModal = ({ visible, onClose }) => {
  const currentLanguage = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const { t } = useTranslation();


  const handleChangeLanguage = (language) => {
    dispatch(setLanguage(language)); 
    i18n.changeLanguage(language); 
  };

  const getButtonStyle = (language) =>
  currentLanguage === language
    ? styles.selectedLanguageButton
    : styles.languageButton;

const getTextStyle = (language) =>
  currentLanguage === language
    ? styles.selectedLanguageText
    : styles.languageText;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
      <StatusBar backgroundColor="rgba(0,0,0,0.8)" barStyle="light-content" />

        <View style={styles.modalView}>
          <View style={styles.header}>
            <View style={{ flex: 1 }} />
            <Typography f20 semibold style={{ textAlign: "center", color:"#563187" }}>
            {t('settings.title')}
            </Typography>
            <TouchableOpacity
              style={{ flex: 1, alignItems: "flex-end" }}
              onPress={onClose}
            >
              <CloseSvg />
            </TouchableOpacity>
          </View>
          <Typography f20 marginBottom={20}>{t('settings.language')}</Typography>
          <View style={styles.languagesContainer}>
      <TouchableOpacity
        style={getButtonStyle('en')}
        onPress={() => handleChangeLanguage('en')}
      >
        <Typography style={getTextStyle('en')}>English</Typography>
      </TouchableOpacity>
      <TouchableOpacity
        style={getButtonStyle('ua')}
        onPress={() => handleChangeLanguage('ua')}
      >
        <Typography style={getTextStyle('ua')}>Українська</Typography>
      </TouchableOpacity>
      <TouchableOpacity
        style={getButtonStyle('de')}
        onPress={() => handleChangeLanguage('de')}
      >
        <Typography style={getTextStyle('de')}>Deutsch</Typography>
      </TouchableOpacity>
    </View>

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)", 
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  languagesContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  languageButton: {
    
    padding: 5,
    borderRadius: 5,
  },
  selectedLanguageButton: {
    backgroundColor: '#563187', 
    padding: 5,
    borderRadius: 10,
  },
  languageText: {
    fontSize:22,
    fontWeight:400
  },
  selectedLanguageText: {
    color: 'white', 
    fontSize:22,
    fontWeight:500
  }
});
export default SettingsModal;
