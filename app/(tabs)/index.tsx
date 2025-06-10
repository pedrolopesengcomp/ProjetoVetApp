import { ThemedText } from "@/app-example/components/ThemedText";
import { ThemedButton } from "@/components/buttons/themedButton";
import { Container } from "@/components/views/container";
import { Page } from "@/components/views/page";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useRouter } from 'expo-router';





//ANTES ERA EXPORT DEFAULT

const Stack = createStackNavigator();

export default function index() {
  
  const { Navigator } = createStackNavigator();
    const navigation = useNavigation();
    const router = useRouter()
    const realizarCaptura = ()=>{
      router.navigate("/(tabs)/CapturaImagem")
    }
    const carregarCaptura = ()=>{
      router.navigate("/(tabs)/CarregaImagem")
    }
  return (
    <Page>
      <ThemedText type="title">Olá, bem vindo de volta</ThemedText>
      <Container type="fill-all-flex" bgColor="#141414">
        <ThemedButton text="Realizar captura" color="" style="" onPress={realizarCaptura}></ThemedButton>
        <ThemedButton text="Carregar captura" color="" style="" onPress={carregarCaptura}></ThemedButton>
      </Container>
      
    </Page>
  );
}
