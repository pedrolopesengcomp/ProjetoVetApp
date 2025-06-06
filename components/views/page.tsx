import { StyleSheet, View, type ViewProps } from 'react-native'

export function Page({...rest}: ViewProps){
    return(
        <View 
        style={{
            display:'flex',
            width:"100%",
            minHeight: "100%",
            backgroundColor: '#141414',
            padding: 50
        }}
        {...rest}/>
    )
}

const styles = StyleSheet.create({
    pageContainer: {

    }
})