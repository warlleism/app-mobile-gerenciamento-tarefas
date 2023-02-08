import Icon from 'react-native-vector-icons/AntDesign'
import IconTrash from 'react-native-vector-icons/FontAwesome'
import Navigation from './../../navigation/index';
import { useNavigation } from '@react-navigation/native';

const { View, Text, Dimensions, ScrollView, StyleSheet, TouchableOpacity } = require("react-native")

const { width } = Dimensions.get('window')

const Tarefas = () => {
    const arr = [1, 2, 3, 4, 5]

    const Navi = useNavigation()
    return (
        <View style={{ width: width, height: '100%', backgroundColor: "#231A87" }}>
            <View style={styles.containerArrow}>
                <TouchableOpacity onPress={() => Navi.navigate('Home')} style={{ width: 60 }}>
                    <Icon name="arrowleft" size={40} color={'#fff'} style={{ marginRight: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Navi.navigate('Home')} style={{
                    width: 40,
                    backgroundColor: "#fff",
                    borderRadius: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Icon name="plus" size={30} color={'#231A87'} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ marginBottom: 30 }}>
                {
                    arr.map(_ => {
                        return (
                            <View style={styles.containerCards}>
                                <View style={{
                                    display: "flex",
                                    flexDirection: 'row',
                                    marginBottom: 10
                                }}>
                                    <TouchableOpacity >
                                        <Icon name="edit" size={30} color={'#fff'} style={{ marginRight: 30 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity >
                                        <IconTrash name="trash-o" size={30} color={'#fff'} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.containerContent}>
                                    <View>
                                        <Icon name="calendar" size={40} color={'#fff'} style={{ marginRight: 10 }} />
                                    </View>
                                    <View style={{ width: "75%" }}>
                                        <Text style={{ marginBottom: 10, color: "#CDCDCD" }}>14/02/2023 - 12:30 pm</Text>
                                        <Text style={{ marginBottom: 10, color: "#fff", fontSize: 15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }


            </ScrollView>
            <Navigation />
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
        marginBottom: 50,
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
        backgroundColor: "#ffffff26",
        justifyContent: "space-evenly",
    }
})

export default Tarefas;