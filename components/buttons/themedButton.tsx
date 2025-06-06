import { StyleSheet, TouchableOpacity, ViewProps } from 'react-native';
import { ThemedText } from '../text/themedText';

export type ContainerProps = ViewProps & {
    color: string,
    text:string,
    style:string,
    onPress: ()=> void
}

export function ThemedButton({color,text,style, onPress, ...rest}:ContainerProps){
    return(
        <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => onPress()}
        {...rest}
      >
            <ThemedText type='defaultSemiBold'>{text}</ThemedText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    default: {},
    emphasis: {},
    buttonContainer: {
      display:'flex',
      alignContent:'center',
      backgroundColor: '#007BFF',
      justifyContent:'center',
      minHeight:70,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
    },
})
