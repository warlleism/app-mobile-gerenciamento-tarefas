import { Dimensions, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window')

const Navigation = () => {

    const Navigation = useNavigation()

    function setBarColor() {

        let horaAtual = new Date();
        let hora = horaAtual.getHours();
        let str = hora.toString()

        if (str.length <= 1) {
            str = 0 + str
        }

        if (str >= 6 && str <= 17) {
            return { cor: '#014867' }
        } else {
            return { cor: '#1B1987' }
        }

    }

    return (
        <View style={{
            bottom: 0,
            height: 60,
            width: width,
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            alignItems: 'center',
            borderTopEndRadius: 30,
            borderTopLeftRadius: 30,
            justifyContent: 'space-around',
            backgroundColor: setBarColor().cor,
        }}>
            <TouchableOpacity onPress={() => Navigation.navigate('Home')}>
                <Icon name="home" size={30} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Navigation.navigate('Tarefas')}>
                <Icon name="calendar" size={30} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="pluscircleo" size={30} color={'#fff'} />
            </TouchableOpacity>
        </View>
    )
}

export default Navigation;