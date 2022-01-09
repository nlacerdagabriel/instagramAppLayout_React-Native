import React from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList } from 'react-native';
import ListUsers from '../ListUsers'

export default function Main() {
  const users = [
    {
      id: "1", nome: "Gabriel Lacerda",
      descricao: "Boa tarde galera do insta...",
      imgperfil: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Suricato_perfil_Steam_2020.jpg/1280px-Suricato_perfil_Steam_2020.jpg",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto2.png",
      liked: true,
      likes: 1
    },
    {
      id: "2", nome: "João Pedro",
      descricao: "Boa tarde galera do insta...",
      imgperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZKsIKWh-3GvRoD4xQOLa-LCVtafPt78TGw&usqp=CAU",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto3.png",
      liked: false,
      likes: 12
    },
    {
      id: "3", nome: "Julia Souza",
      descricao: "Boa tarde galera do insta...",
      imgperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktcgD4nLDW0-s4dzBsf-r0RS-YQek2YaM9Q&usqp=CAU",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto4.png",
      liked: false,
      likes: 3
    },
    {
      id: "4", nome: "Bento Mario",
      descricao: "Boa tarde galera do insta...",
      imgperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAX_WYUA0q9s619TyeAxKVWFReB1T2QIVNnA&usqp=CAU",
      imgPublicacao: "https://sujeitoprogramador.com/instareact/foto1.png",
      liked: false,
      likes: 8
    },
  ]

  return (
    <View style={styles.main}>
      <FlatList
        data={users}
        renderItem={ ({item}) => <ListUsers data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,

  }
})