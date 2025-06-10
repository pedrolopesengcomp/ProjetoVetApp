import React from 'react';


import { Stack } from 'expo-router';

/*const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CapturaImagem" component={GetImage} />
    </Stack.Navigator>
  );
}
*/
export default function TabLayout(){
    return(
        <Stack>
            <Stack.Screen name="index"/>
            <Stack.Screen name="CapturaImagem" />
            <Stack.Screen name="CarregaImagem" />
        </Stack>
    )

}