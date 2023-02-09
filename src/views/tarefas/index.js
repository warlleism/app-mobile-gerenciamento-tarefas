import Icon from 'react-native-vector-icons/AntDesign'
import IconTrash from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { View, Text, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from "react-native"

const { width } = Dimensions.get('window')

const Tarefas = () => {

    const Navi = useNavigation()
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
                    alignItems: 'center'
                }}>
                    <Icon name="plus" size={30} color={'#231A87'} />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ marginBottom: 30 }}>

                <View style={styles.containerCards}>
                    <View style={{
                        display: "flex",
                        flexDirection: 'row',
                        marginBottom: 10
                    }}>
                        <TouchableOpacity >
                            <Icon name="edit" size={20} color={'#fff'} style={{ marginRight: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <IconTrash name="trash-o" size={20} color={'#fff'} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => Navi.navigate('Listar')} style={styles.containerContent}>
                        <View>
                            <Icon name="calendar" size={40} color={'#fff'} style={{ marginRight: 10 }} />
                        </View>
                        <View style={{ width: "75%" }}>
                            <Text style={{ marginBottom: 10, color: "#CDCDCD" }}>14/02/2023 - 12:30 pm</Text>
                            <Text style={{ marginBottom: 10, color: "#fff", fontSize: 15 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
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
        backgroundColor: "#ffffff26",
        justifyContent: "space-evenly",
    }
})

export default Tarefas;