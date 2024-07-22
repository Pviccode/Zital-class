import { View, Text, StyleSheet, StatusBar, Modal, TouchableOpacity, TextInput} from "react-native";
import { useState } from "react";
import { NavigateButton, theme } from "../Components/DataSection/Data";
import { FontAwesome5, Entypo, Ionicons, AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function AcctProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  function shadowProps() {
    return {
      shadowColor: "rgb(128, 128, 128)",
      shadowOffset: { width: 2, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 18,
      elevation: 5,
    }
  }
  
  const numInputs = [{id: 1, label: 'First Name'}, {id: 2, label: 'Last Name'}, {id: 3, label: 'Email'}, {id: 4, label: 'Shipping Address'}]

  function activeOpacity() {
    return 0.6
  }
  return (
    <View style={styles.container}>
      <View style={styles.userProfileCon}>
        <View style={styles.userProfile}>
          <View style={styles.userPhoto}>
            <FontAwesome5 name="user-alt" size={50} color={theme.colors.primary1} />
          </View>
          <NavigateButton style={styles.uploadPhoto} activeOpacity={0.7}>
            <Entypo name="camera" size={20} color="white" />
          </NavigateButton>
          <Text style={{fontFamily: theme.fontName.text600[0], fontSize: 19, color: 'white'}}>NJOKU NNABUGWU VICTORY</Text>
        </View>
        <View style={styles.profileBoxes}>
          <View style={[styles.box, shadowProps()]}>
            <NavigateButton activeOpacity={0.3}>
              <Ionicons name="notifications-outline" size={32} color={theme.colors.profileIcons} />
            </NavigateButton>
          </View>
          <View style={[styles.box, shadowProps()]}>
            <NavigateButton activeOpacity={0.3}>
              <AntDesign name="customerservice" size={32} color={theme.colors.profileIcons} />
            </NavigateButton>
          </View>
          <View style={[styles.box, shadowProps()]}>
            <NavigateButton activeOpacity={0.3}>
               <AntDesign name="staro" size={32} color={theme.colors.profileIcons} />
            </NavigateButton>
          </View>
        </View>
      </View>
      <View style={styles.otherInfosCon}>
        <View style={styles.otherInfos}>
          <NavigateButton style={[styles.info, {marginTop: 40}]} activeOpacity={activeOpacity()} onPress={toggleModal}>
            <FontAwesome5 name="user" size={24} color={theme.colors.profileIcons} />
            <Text style={styles.infoText}>Edit Profile</Text>
          </NavigateButton>
          <NavigateButton style={styles.info} activeOpacity={activeOpacity()}>
            <FontAwesome5 name="history" size={24} color={theme.colors.profileIcons} />
            <Text style={styles.infoText}>Order History</Text>
          </NavigateButton>
          <NavigateButton style={styles.info} activeOpacity={activeOpacity()}>
            <FontAwesome name="credit-card" size={24} color={theme.colors.profileIcons} />
            <Text style={styles.infoText}>Cards</Text>
          </NavigateButton>
          <NavigateButton style={styles.info} activeOpacity={activeOpacity()}>
            <Ionicons name="location-outline" size={25} color={theme.colors.profileIcons} />
            <Text style={styles.infoText}>Shipping Address</Text>
          </NavigateButton>
          <NavigateButton style={styles.info} activeOpacity={activeOpacity()}>
            <MaterialIcons name="password" size={24} color={theme.colors.profileIcons} />
            <Text style={styles.infoText}>Change Password</Text>
          </NavigateButton>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={[styles.modalView, shadowProps()]}>
            <View style={{paddingHorizontal: 27, paddingTop: 20}}>
              <TouchableOpacity onPress={toggleModal} style={{alignSelf: 'flex-end'}} activeOpacity={0.7}>
                <Ionicons name="close" size={30} color="black"  />
              </TouchableOpacity>
              <View style={styles.editProfileForm}>
                {numInputs.map((item) => (
                  <View key={item.id} style={{gap: 5}}>
                    <Text style={{fontFamily: theme.fontName.text500[0], fontSize: 16}}>{item.label}</Text>
                    <TextInput style={styles.textInput}/>
                  </View>
                ))}
                <NavigateButton style={styles.updateBtn} activeOpacity={0.7}>
                  <Text style={{fontFamily: theme.fontName.text500[0], color: 'white', fontSize: 20}}>Update</Text>
                </NavigateButton>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <StatusBar style='auto' barStyle={'light-content'} />
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  userProfileCon: {
    flex: 0.6,
    backgroundColor: theme.colors.primary1,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  userProfile: {
    flex: 1,
    alignItems: "center",
    marginTop: 62,
    gap: 25,
  },
  userPhoto: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 70,
  },
  uploadPhoto: {
    backgroundColor: "#0000006c",
    padding: 8,
    borderRadius: 50,
    position: "absolute",
    top: 75,
    left: 226,
  },
  profileBoxes: {
    flexDirection: "row",
    height: 80,
    width: "70%",
    alignSelf: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 262,
  },
  box: {
    backgroundColor: "white",
    width: "30%",
    height: "100%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  otherInfosCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  otherInfos: {
    width: "90%",
    height: "90%",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
    borderColor: "#c0118638",
    gap: 15,
  },
  infoText: {
    fontFamily: theme.fontName.text400[0],
    fontSize: 16,
  },
  modalView: {
    height: '90%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  editProfileForm: {
    marginTop: 10
  },
  textInput: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    borderColor: 'gray',
    fontSize: 16,
    marginBottom: 22
  },
  updateBtn: {
    backgroundColor: theme.colors.primary1,
    borderRadius: 50,
    width: 300,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20
  }
});
