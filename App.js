import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native";
const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";
const BORDER_COLOR = "rgb(230, 230, 255)";
const imgData = [
  { id: 1, imgSource: require("./assets/1.jpg") },
  { id: 2, imgSource: require("./assets/2.jpg") },
  { id: 3, imgSource: require("./assets/3.jpg") },
  { id: 4, imgSource: require("./assets/4.jpg") },
  { id: 5, imgSource: require("./assets/5.jpg") },
  { id: 6, imgSource: require("./assets/6.jpg") },
];
export default function App() {
  const centerImgData = Math.floor(imgData.length / 2);
  return (
    <View style={styles.container}>
      <View style={styles.headerGroup}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("./assets/avaImage.jpg")}
            style={styles.avaImage}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.nameText}>Phung Minh Nguyet</Text>
          <Text style={styles.jobText}>Developer</Text>
          <View style={styles.btnWrapper}>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendMessageBtn}>
              <Feather name="send" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.statisticsGroup}>
        <View style={styles.countGroup}>
          <Text style={styles.countText}>210</Text>
          <Text style={styles.items}>Photos</Text>
        </View>
        <View style={styles.countGroup}>
          <Text style={styles.countText}>15k</Text>
          <Text style={styles.items}>Followers</Text>
        </View>
        <View style={styles.countGroup}>
          <Text style={styles.countText}>650</Text>
          <Text style={styles.items}>Following</Text>
        </View>
      </View>
      <View style={styles.imagesGroup}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.imagesItem}>
            {imgData.slice(0, centerImgData).map((item) => {
              return <Image source={item.imgSource} style={styles.image} />;
            })}
          </View>
          <View style={styles.imagesItem}>
            {imgData.slice(centerImgData).map((item) => {
              return <Image source={item.imgSource} style={styles.image} />;
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  headerGroup: {
    flex: 0.25,
    flexDirection: "row",
  },
  avaImage: {
    marginTop: 30,
    width: 120,
    height: 120,
    borderRadius: 400 / 2,
  },
  statisticsGroup: {
    marginTop: 10,
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imagesGroup: {
    marginTop: 10,
    flex: 0.6,
    flexDirection: "column",
  },
  userInfo: {
    marginTop: 60,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    height: 100,
  },
  followBtn: {
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    backgroundColor: "pink",
    width: 100,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  sendMessageBtn: {
    backgroundColor: "white",
    width: 56,
    height: 36,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    marginLeft: 8,
  },
  btnWrapper: {
    flexDirection: "row",
  },
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  jobText: {
    fontSize: 14,
    fontWeight: "400",
    color: "gray",
  },
  followText: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
  countGroup: {
    flexDirection: "column",
    alignItems: "center",
  },
  countText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  items: {
    fontSize: 12,
    fontWeight: "400",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imagesItem: {
    flexDirection: "column",
  },
  image: {
    width: 170,
    height: 170,
    margin: 10,
    borderRadius: 50,
  },
});
