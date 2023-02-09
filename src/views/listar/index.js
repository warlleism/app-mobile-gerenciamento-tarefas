import Icon from 'react-native-vector-icons/AntDesign'
import Navigation from './../../navigation/index';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from "react-native"


const { width } = Dimensions.get('window')

const Listar = () => {

    const Navi = useNavigation()
    return (
        <View style={{ width: width, height: '100%', backgroundColor: "#013a52" }}>
            <View style={styles.containerArrow}>
                <TouchableOpacity onPress={() => Navi.navigate('Tarefas')} style={{ width: 60 }}>
                    <Icon name="arrowleft" size={40} color={'#fff'} style={{ marginRight: 10 }} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ marginTop: 30, marginBottom: 30 }}>
                <View style={styles.containerContent}>
                    <View style={{ width: "90%" }}>
                        <Text style={{ marginVertical: 20, color: "#CDCDCD" }}>14/02/2023 - 12:30 pm</Text>
                        <Text style={{ marginBottom: 10, color: "#fff", fontSize: 15 }}>Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                </View>
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
    },
    containerContent: {
        width: '90%',
        display: "flex",
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff26",
    }
})

export default Listar;