import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { FontAwesome5, AntDesign, Feather } from "@expo/vector-icons";
import { theme } from "./DataSection/Data";

export default function HomeScreenCustomHeader() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user}>
          <View style={styles.userImage}>
            <FontAwesome5 name="user-alt" size={24} color="white" />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.greetingText}>Hi,</Text>
            <Text style={styles.greetingText}>Nnabugwu</Text>
          </View>
        </View>
        <AntDesign name="customerservice" size={30} color="#000000" />
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchField}
          placeholder="Search for item"
          placeholderTextColor={"#838383"}
        />
        <Feather name="search" size={24} color="black" style={{ position: "absolute", right: 340 }}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    width: "90%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 11,
  },
  userImage: {
    width: 45,
    height: 45,
    backgroundColor: theme.colors.primary1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  greetingText: {
    fontFamily: theme.fontName.text600[0],
    color: "black", 
    fontSize: 20 
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  searchField: {
    borderWidth: 1,
    padding: 12,
    paddingLeft: 40,
    borderRadius: 5,
    borderColor: "#565555",
    fontSize: 16,
    backgroundColor: "white",
    color: "#000",
    width: "100%",
    fontFamily: theme.fontName.text400[0]
  },
});
