import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import data from "../../services/Products";
import Header from "../../components/Header";

function ItemList({ navigation, data }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetail", {
          idProduct: data.id,
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            source={{
              uri: data.thumbImage,
            }}
          ></Image>
        </View>
        <View style={styles.content}>
          <Text style={styles.header} numberOfLines={2}>
            {data.name}
          </Text>
          <Text>Detail: {data.details}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function Products({ navigation }) {
  return (
    <View style={styles.waper}>
      <Header title="List"></Header>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemList navigation={navigation} data={item}></ItemList>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  waper: {
    flex: 1,
  },
  container: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    borderRadius: 7,
    overflow: "hidden",
  },
  containerImage: { width: 100, height: 150 },
  image: {
    width: 100,
    height: 150,
    resizeMode: "contain",
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Products;
