import Icon from 'react-native-vector-icons/AntDesign'
import IconTrash from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, Dimensions, StyleSheet, TouchableOpacity } from "react-native"
import { useRef, useState, useEffect } from 'react';
import Lottie from 'lottie-react-native';

const { width } = Dimensions.get('window')

const Tarefas = () => {

    useEffect(() => {
        animationRef.current?.play()
        animationRef.current?.play(30, 120);
    }, [])


    const animationRef = useRef(null)

    const Navi = useNavigation()

    const [data, setData] = useState([
        {
            id: 1,
            data: '14/02/2023 - 12:30 pm',
            descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 2,
            data: '14/02/2023 - 12:30 pm',
            descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 3,
            data: '14/02/2023 - 12:30 pm',
            descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 4,
            data: '14/02/2023 - 12:30 pm',
            descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 5,
            data: '14/02/2023 - 12:30 pm',
            descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
    ]);

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

        setData(newArrData)

        setTimeout(() => {
            const result = data.filter(e => e.id != item.id)
            if (data.length <= 1) {
                setData()
            } else {
                setData(result)
            }
        }, 1000)

    }

    const Item = ({ descricao, data, item, index }) => (
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
                <TouchableOpacity >
                    <IconTrash name="trash-o" size={20} color={'#fff'} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.containerContent}>
                <View style={{ marginRight: 10 }}>
                    <Icon name="calendar" size={40} color={'#fff'} />
                </View>
                <View style={{ width: "75%" }}>
                    <Text style={{ marginBottom: 10, color: "#CDCDCD" }}>{item.id}</Text>
                    <Text style={{ marginBottom: 10, color: "#CDCDCD" }}>{data}</Text>
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
                    renderItem={({ item, index }) => <Item descricao={item.descricao} data={item.data} item={item} index={index} />}
                    keyExtractor={item => item.id}
                />

            </View>
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
    }
})

export default Tarefas;