import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { View, Dimensions, ScrollView, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import { useState } from 'react';

const { width } = Dimensions.get('window')

const NovaTarefa = () => {

    const defaultForm = {
        titulo: '',
        data: '',
        hora: ''
    }

    const [formulario, setFormulario] = useState(defaultForm)

    const Navi = useNavigation()

    const validInput = () => {
        if (formulario.titulo === '' || formulario.data === '' || formulario.hora === '') {
            return
        } else {
            return (
                <TouchableOpacity onPress={() => Navi.navigate('Tarefas')} style={{ width: 60 }}>
                    <Icon name="check" size={40} color={'#fff'} style={{ marginRight: 10 }} />
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={{ width: width, height: '100%', backgroundColor: "#013a52" }}>
            <View style={styles.containerArrow}>
                <TouchableOpacity onPress={() => Navi.navigate('Tarefas')} style={{ width: 60 }}>
                    <Icon name="arrowleft" size={40} color={'#fff'} style={{ marginRight: 10 }} />
                </TouchableOpacity>
                {validInput()}
            </View>
            <ScrollView style={{ marginTop: 30, marginBottom: 30 }}>
                <TextInput placeholder='Título' placeholderTextColor={'#fff'} style={{ fontSize: 27, color: "#fff", width: "90%", alignSelf: "center", marginBottom: 70 }} onChangeText={(e) => setFormulario({ ...formulario, titulo: e })} />
                <TextInput placeholder='Data' placeholderTextColor={'#fff'} style={{ fontSize: 23, color: "#fff", width: "90%", alignSelf: "center", marginBottom: 30 }} onChangeText={(e) => setFormulario({ ...formulario, data: e })} />
                <TextInput placeholder='Hora' placeholderTextColor={'#fff'} style={{ fontSize: 23, color: "#fff", width: "90%", alignSelf: "center", marginBottom: 30 }} onChangeText={(e) => setFormulario({ ...formulario, hora: e })} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    containerArrow: {
        marginTop: 50,
        marginBottom: 20,
        width: width - 30,
        alignSelf: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

})

export default NovaTarefa;