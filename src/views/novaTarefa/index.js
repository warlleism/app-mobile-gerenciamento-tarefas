import { View, Dimensions, ScrollView, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, BackHandler, Alert } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from "react-native-masked-text";
import Icon from 'react-native-vector-icons/AntDesign'
import { useState, useContext } from 'react';
import { Context } from "../../context/provider";
import { useEffect } from 'react';

const { width } = Dimensions.get('window')

const NovaTarefa = () => {

    const { tarefas, setTarefas } = useContext(Context)

    const defaultForm = {
        id: '',
        titulo: '',
        descricao: '',
        data: '',
    }

    const [formulario, setFormulario] = useState(defaultForm)
    const [spinner, setSpinner] = useState(false)

    const CriarTarefa = async () => {

        console.log('Criando')

        setSpinner(true)

        const OptionsRegister = {
            body: JSON.stringify(formulario),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch('https://backend-warlleism.vercel.app/criar', OptionsRegister)
            .then((res) => res.json())
            .then((response) => {
                if (response) {
                    setTimeout(() => {
                        Navi.navigate('Tarefas')
                    }, 1000)

                }
            })
    };

    const EditarTarefa = async () => {

        console.log('editando')

        setSpinner(true)

        const OptionsRegister = {
            body: JSON.stringify(formulario),
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch('https://backend-warlleism.vercel.app/editar', OptionsRegister)
            .then((res) => res.json())
            .then((response) => {
                if (response) {
                    setTimeout(() => {
                        Navi.navigate('Tarefas')
                    }, 1000)

                }
            })
    };


    const Navi = useNavigation()

    useEffect(() => {
        setFormulario({
            id: tarefas.id,
            titulo: tarefas.titulo,
            descricao: tarefas.descricao,
            data: tarefas.data,
        })
    }, [])

    const validInput = () => {
        if (formulario.descricao === '' || formulario.titulo === '' || formulario.data === '') {
            return
        } else {
            return (
                <>
                    {
                        tarefas.length != 0
                            ?
                            <TouchableOpacity onPress={() => {
                                EditarTarefa()
                            }} style={{ width: 60 }}>
                                {
                                    spinner
                                        ?
                                        <ActivityIndicator size="large" color="#fff" />
                                        :
                                        <Icon name="check" size={40} color={'#fff'} style={{ marginRight: 10 }} />
                                }
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => {
                                CriarTarefa()
                            }} style={{ width: 60 }}>
                                {
                                    spinner
                                        ?
                                        <ActivityIndicator size="large" color="#fff" />
                                        :
                                        <Icon name="check" size={40} color={'#fff'} style={{ marginRight: 10 }} />
                                }
                            </TouchableOpacity>
                    }
                </>
            )
        }
    }

    return (

        <View style={{ width: width, height: '100%', backgroundColor: "#013a52" }}>
            {console.log(formulario)}
            <View style={styles.containerArrow} >
                <TouchableOpacity onPress={() => {
                    Navi.navigate('Tarefas')
                    setTarefas([])
                }} style={{ width: 60 }}>
                    <Icon name="arrowleft" size={40} color={'#fff'} style={{ marginRight: 10 }} />
                </TouchableOpacity>
                {validInput()}
            </View >
            {
                tarefas.length != 0
                    ?
                    <ScrollView style={{ marginTop: 30, marginBottom: 30 }}>
                        <TextInput placeholder='Título' value={formulario.titulo} placeholderTextColor={'#fff'} style={{ fontSize: 27, color: "#fff", width: "90%", alignSelf: "center", marginBottom: 70 }} onChangeText={(e) => setFormulario({ ...formulario, titulo: e })} />
                        <TextInput placeholder='Descrição' value={formulario.descricao} placeholderTextColor={'#fff'} style={{ fontSize: 23, color: "#fff", width: "90%", alignSelf: "center", marginBottom: 30 }} onChangeText={(e) => setFormulario({ ...formulario, descricao: e })} />
                        <TextInputMask
                            autoFocus={false}
                            placeholder='Data'
                            type={'datetime'}
                            placeholderTextColor={'#fff'}
                            color={'#fff'}
                            value={formulario.data}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                suffixUnit: ''
                            }}
                            keyboardType={"number-pad"}
                            onChangeText={(e) => setFormulario({ ...formulario, data: e })}
                            style={{ fontSize: 23, color: "#fff", width: "90%", alignSelf: "center", marginBottom: 30 }}
                        />
                    </ScrollView>
                    :
                    <ScrollView style={{ marginTop: 30, marginBottom: 30 }}>
                        <TextInput placeholder='Título' placeholderTextColor={'#fff'} style={{ fontSize: 27, color: "#fff", width: "90%", alignSelf: "center", marginBottom: 70 }} onChangeText={(e) => setFormulario({ ...formulario, titulo: e })} />
                        <TextInput placeholder='Descrição' placeholderTextColor={'#fff'} style={{ fontSize: 23, color: "#fff", width: "90%", alignSelf: "center", marginBottom: 30 }} onChangeText={(e) => setFormulario({ ...formulario, descricao: e })} />
                        <TextInputMask
                            autoFocus={false}
                            placeholder='Data'
                            type={'datetime'}
                            placeholderTextColor={'#fff'}
                            color={'#fff'}
                            value={formulario.data}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                suffixUnit: ''
                            }}
                            keyboardType={"number-pad"}
                            onChangeText={(e) => setFormulario({ ...formulario, data: e })}
                            style={{ fontSize: 23, color: "#fff", width: "90%", alignSelf: "center", marginBottom: 30 }}
                        />
                    </ScrollView>
            }
        </View >
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