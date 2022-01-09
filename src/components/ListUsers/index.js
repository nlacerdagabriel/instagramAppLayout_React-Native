import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, ImageEditor } from 'react-native';

export default function ListUsers(props) {

  return (
    <View style={styles.container}>
      <View style={styles.headerPub}>
        <Image
          source={{ uri: props.data.imgperfil }}
          style={styles.imgPerfil}
        />
        <Text style={styles.textHeaderPub}>{props.data.nome}</Text>
      </View>

      <Image
        source={{ uri: props.data.imgPublicacao }}
        style={styles.imgPub}
      />

      <View style={styles.pubOptions}>
        <Image
          source={props.data.liked ? require("../../img/likeada.png") : require("../../img/like.png")}
          style={styles.eachOption}
        />
        <Image
          source={require("../../img/comment.png")}
          style={styles.eachOption}
        />
        <Image
          source={require("../../img/send.png")}
          style={styles.eachOption}
        />
      </View>

      <View style={styles.descriptionData}>
        <Text style={styles.likes}>{(props.data.likes == 1) ? props.data.likes + ' curtida' : props.data.likes + ' curtidas'}</Text>
        <Text style={styles.nameDescription}>{props.data.nome}</Text>
        <Text style={styles.description}>{props.data.descricao}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerPub: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  imgPerfil: {
    height: 50,
    width: 50,
    borderRadius: 99,
    borderWidth: 0.2,
    borderColor: "#000",
  },
  textHeaderPub: {
    fontSize: 22,
    color: "#000",
    marginLeft: 8,
  },
  imgPub: {
    height: 400,
  },
  pubOptions: {
    flexDirection: 'row',
    margin: 6,
  },
  eachOption: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  descriptionData:{
    marginLeft: 6,
    marginBottom: 20,
  },
  likes: {
    fontWeight: 'bold',
    color: "#000"
  },
  nameDescription:{
    fontWeight: 'bold',
    fontSize: 19,
    color: "#000"

  },
  description:{
    fontSize: 16,
    color: "#000"

  }
})