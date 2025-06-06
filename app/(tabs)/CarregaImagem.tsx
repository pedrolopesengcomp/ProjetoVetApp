import { ThemedText } from "@/app-example/components/ThemedText";
import { ThemedButton } from "@/components/buttons/themedButton";
import { Page } from "@/components/views/page";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://projeto-veterinaria-b09fd-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

let ID = 0

//Envia a imagem ao Firebase

const enviaImagem  = async function(imagem: string, ID: any){
  set(ref(database, 'imagens/' + ID), {
    img: imagem,
    id: ID
  })
}

export default function CarregaImagem(){
    const [image, setImage] = useState<string | null>(null);

    const pegaImagem = async()=>{
        let resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            aspect: [4,3],
            quality: 5
        })
        console.log(resultado)

        if(!resultado.canceled) //Ou seja, caso o resultado não seja cancelado
        {
            setImage(resultado.assets[0].uri) //Poe na variavel image o valor da imagem da galeria
        }
    }


    return(
        <Page>
            <ThemedText type="title">
                Carregue a imagem da sua galeria
            </ThemedText>
            <ThemedButton text="Selecione a imagem" color="" style="" onPress={pegaImagem}></ThemedButton>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <ThemedButton text="Enviar para análise" color="" style="" onPress={pegaImagem}></ThemedButton>
        </Page>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});