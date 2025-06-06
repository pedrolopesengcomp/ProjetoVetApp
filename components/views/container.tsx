import { StyleSheet, View, ViewProps } from "react-native";


export type ContainerProps = ViewProps & {
    type:string,
    bgColor:string,
}

export function Container({type, bgColor, ...rest}:ContainerProps){

    

    return(
        <View
            style = {[
                {backgroundColor: bgColor},
                type === 'column-align' ? styles.columnAlign : undefined,
                type === 'row-align' ? styles.rowAlign : undefined,
                type === 'content-left' ? styles.contentInLeft : undefined,
                type === 'content-right' ? styles.contentInRight:undefined,
                type === 'fill-all-flex' ? styles.allFilledAlign:undefined
            ]}
            {...rest}
        ></View>
    )
}

const styles = StyleSheet.create({
    columnAlign:{
        width:"100%",
        minHeight:200,
        display:'flex',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'column',

        marginTop:50
    },
    allFilledAlign:{
        width:"100%",
        minHeight:200,
        display:"flex",
        alignContent: 'space-around',
        justifyContent:'space-around',
        flexDirection: 'column'
    },
    rowAlign:{
        width:"100%",
        minHeight:200,
        display:'flex',
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',

        marginTop:50
    },
    contentInLeft:{
        width:"100%",
        minHeight:200,
        display:'flex',
        alignContent:'flex-start',
        flexDirection:'row',

        marginTop:50
    },
    contentInRight:{
        width:"100%",
        minHeight:200,
        display:'flex',
        alignContent:'flex-end',
        flexDirection:'row',

        marginTop:50
    }
})
