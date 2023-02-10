import Icon from 'react-native-vector-icons/AntDesign'
import IconTrash from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity, Alert, Modal, Pressable } from "react-native"
import { useRef, useState, useEffect } from 'react';
import Lottie from 'lottie-react-native';

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

const Tarefas = () => {

    const [count, setCount] = useState(0)

    const [id, setId] = useState(0)

    const [modalVisible, setModalVisible] = useState(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        animationRef.current?.play()
        animationRef.current?.play(30, 120);

        fetch('https://backend-warlleism.vercel.app/tarefas')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [count])


    const deletarTarefa = async (id) => {

        const OptionsRegister = {
            body: JSON.stringify({ id: id }),
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch('https://backend-warlleism.vercel.app/deletar', OptionsRegister)
            .then((res) => res.json())
            .then((response) => console.log(response))

        setCount(count + 1)
    };


    const animationRef = useRef(null)

    const Navi = useNavigation()

    const onClickItem = (item, index) => {
        const newArrData = data.map((e) => {
            if (item.id == e.id) {
                return {
                    ...e,
                    selected: true
                }
            } else {
                return {
                    ...e
                }
            }
        })

        setTimeout(() => {
            deletarTarefa(item.id)
        }, 500)

        setData(newArrData)
    }

    const Item = ({ descricao, data, titulo, item, index }) => (
        <View style={styles.containerCards}>
            <View style={{
                display: "flex",
                flexDirection: 'row',
                marginBottom: 10
            }}>
                <TouchableOpacity
                    onPress={() => {
                        onClickItem(item, index)
                    }}>
                    <Icon name="check" size={20} color={'#fff'} style={{ marginRight: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Icon name="edit" size={20} color={'#fff'} style={{ marginRight: 30 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setId(item.id)
                    setModalVisible(!modalVisible);
                }
                }>
                    <IconTrash name="trash-o" size={20} color={'#fff'} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.containerContent}>
                <View style={{ marginRight: 10 }}>
                    <Icon name="calendar" size={40} color={'#fff'} />
                </View>
                <View style={{ width: "75%" }}>
                    <Text style={{ marginBottom: 10, color: "#CDCDCD" }}>{data}</Text>
                    <Text style={{ marginBottom: 10, color: "#CDCDCD" }}>{titulo}</Text>
                    <Text style={{ marginBottom: 10, color: "#fff", fontSize: 15 }}>{descricao}</Text>
                </View>
                <View style={{
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "#0000004d",
                    opacity: item.selected ? 1 : 0
                }}>
                    <Lottie
                        ref={animationRef}
                        autoPlay={true}
                        loop={false}
                        source={require('../../assets/saveAnimation.json')}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );


    return (
        <View style={{ width: width, height: '100%', backgroundColor: "#013a52" }}>


            <View style={styles.containerArrow}>
                <TouchableOpacity onPress={() => Navi.navigate('Home')} style={{ width: 60 }}>
                    <Icon name="arrowleft" size={40} color={'#fff'} style={{ marginRight: 10 }} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Navi.navigate('Nova')} style={{
                    width: 40,
                    backgroundColor: "#fff",
                    borderRadius: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Icon name="plus" size={30} color={'#231A87'} />
                </TouchableOpacity>
            </View>

            <View style={{ marginBottom: 140 }} >
                <FlatList
                    numColumns={'1'}
                    data={data}
                    renderItem={({ item, index }) => <Item descricao={item.descricao} data={item.data} titulo={item.titulo} item={item} index={index} />}
                    keyExtractor={item => item.id}
                />
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.centeredView} >
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Excluir Tarefa?</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                deletarTarefa(id)
                                setTimeout(() => {
                                    setModalVisible(!modalVisible)
                                }, 1000)
                            }}>
                            <Text style={styles.textStyle}>Exluir item</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    containerArrow: {
        width: width - 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    },
    containerCards: {
        width: width - 50,
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 30,
        alignItems: "flex-end",
        display: "flex",
        flexDirection: 'column',
    },
    containerContent: {
        height: 200,
        width: '100%',
        display: "flex",
        borderRadius: 10,
        alignItems: "center",
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: "#ffffff26",
        justifyContent: "space-evenly",
    },
    centeredView: {
        height: height,
        backgroundColor: '#000000a6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    },

    modalText: {
        marginBottom: 30
    },
    button: {
        borderRadius: 5,
        paddingHorizontal: 40,
        paddingVertical: 20,
        elevation: 2,
    },

    textStyle: {
        color: "#fff",
        fontWeight: "500"
    },
    buttonClose: {
        backgroundColor: '#01546c',
    },
})

export default Tarefas;