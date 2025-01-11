/* eslint-disable react/react-in-jsx-scope */

import react from "react"
import {
    View, Text , StyleSheet, useColorScheme, Button
} from 'react-native';
function AppPro():JSX.Element{
    const isDark = useColorScheme() === 'dark'
    return(
        <View  style={styles.container}>
            <Text style={isDark ? styles.whiteText : styles.darkText}>
                Hello There
            </Text>
            <Button 
            title="Hello There"
            color="purple"
            />
             <Button 
            title="Hello"
            color="blue"
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whiteText:{
        color:'white',
    },
    darkText:{
        color:'red',
    },
})
export default AppPro