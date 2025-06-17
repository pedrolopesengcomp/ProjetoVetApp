import { ThemedText } from "@/app-example/components/ThemedText";
import { ThemedButton } from "@/components/buttons/themedButton";
import { Page } from "@/components/views/page";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

/*import { getStorage, ref, uploadBytes } from "firebase/storage";*/






export default function CarregaImagem(){
  const firebaseConfig = {
    databaseURL: "https://projeto-veterinaria-b09fd-default-rtdb.firebaseio.com/",
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const [image, setImage] = useState<string>('');
  const [nomeImage, setNomeImage] = useState<string>('');
  const [resultImage,setResultImage] = useState<string>('')
  const [uploading, setUploading] = useState<Boolean>(false);
  const [imageURL, setImageURL] = useState<string>('');
  let ID = 5

  /*const storage = getStorage(app);*/
  //const imagens = ref(storage, 'imagens/'+ID.toString+'.jpg');

  const converterURIArquivo = async function(image:string){
    //Código feito para enviar ao firebase realtime database

    /*const response = await fetch(image)
    const arquivo = response.blob()

    const formData = new FormData(); // Simula um arquivo enviado para o HTML
    await formData.append('image' , {
      uri: arquivo,
      type: "image/jpeg",
      name:"imagem.jpg"
    } as any)

    return formData*/

    const byteString = atob(image.split(',')[1]); // Decodifica a string base64
    const mimeString = image.split(',')[0].split(':')[1].split(';')[0]; // Extrai o tipo MIME

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // Cria um objeto Blob a partir do ArrayBuffer
    const blob = new Blob([ab], { type: mimeString });

    const formData = new FormData();
    // Anexa o Blob ao FormData, com o nome do campo 'image' que o backend espera
    formData.append('image', blob, nomeImage);

    return formData;
  }

  const recebeImagem = async function(nome: string){
    //Rota para testar a YOLO
    await fetch(`http://127.0.0.1:8000/teste/${nomeImage}`)

      const resposta = await fetch("http://127.0.0.1:8000/imagens/" + nome, {
        method: "GET"
      })

      // A resposta é um Blob (dados binários da imagem)
      const imageBlob = await resposta.blob();

      return imageBlob
  }

  const enviaImagem = async function(){
    
      const arquivo = await converterURIArquivo(image)

      console.log(arquivo.forEach)

      const resposta = await fetch("http://127.0.0.1:8000/envio", {
        method:"POST",
        body:arquivo
      })

      

      const json = await resposta.json
      console.log(json)

      const resultado = await recebeImagem(nomeImage)

      // Cria um URL de objeto a partir do Blob
      const objectURL = URL.createObjectURL(resultado);

      setResultImage(objectURL)
      

      //Código feito para enviar a imagem ao realtime database do firebase
          /*set(ref(database, 'imagens/' + ID), {
            arquivo:image,
            id:ID
          });

          alert('imagens/' + ID)*/
    
  }

  /*const enviaImagem = async function(){
    const arquivo = await converterURIArquivo(image)

    
    await uploadBytes(imagens, arquivo).then((snapshot) => {
      console.log('Upload concluido!');
    });
  }*/


  /*const firebaseConfig = {
    databaseURL: "https://projeto-veterinaria-b09fd-default-rtdb.firebaseio.com/",
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);*/

    async function pegaImagem(){
        let resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            aspect: [4,3],
            quality: 5
        }) 
        ID++


        if(!resultado.canceled) //Ou seja, caso o resultado não seja cancelado
        {
            setImage(resultado.assets[0].uri) //Poe na variavel image o valor da imagem da galeria
            setNomeImage(`${resultado.assets[0].fileName}`)
        }
    }
    return(
        <Page>
            <ThemedText type="title">
                Carregue a imagem da sua galeria
            </ThemedText>
            <ThemedButton text="Selecione a imagem" color="" style="" onPress={pegaImagem}></ThemedButton>

            {image && 
            <Image source={{ uri: image }} style={styles.image} />

            }
            {image && 
            <ThemedButton text="Enviar para análise" color="" style="" onPress={enviaImagem}></ThemedButton>}

            {resultImage && 
            <Image source={{uri: resultImage}} style={styles.image}></Image>}
            
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