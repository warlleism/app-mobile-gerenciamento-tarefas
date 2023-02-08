import { useEffect, useState } from "react";
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import { LinearGradient } from 'expo-linear-gradient';
import Navigation from "../../navigation";

const { width } = Dimensions.get('window')

const Home = () => {

    const arr = [1, 2, 3]

    const [dados, setDados] = useState({
        img: '',
        hora: '',
        horario: '',
        color: ''
    })

    const [minuto, setMinuto] = useState()

    const setMinute = () => {

        let horaAtual = new Date();
        let minuto = horaAtual.getMinutes();
        let str = minuto.toString()

        if (str.length <= 1) {
            str = 0 + str
        }

        return setMinuto(str)
    }


    const setBackgroundImageInfo = () => {

        let horaAtual = new Date();
        let hora = horaAtual.getHours();
        let str = hora.toString()

        if (str.length <= 1) {
            str = 0 + str
        }

        if (str >= 6 && str <= 17) {
            return setDados({ ...dados, img: require('../../images/img1.png'), horario: 'Bom dia', hora: str, })
        } else {
            return setDados({ ...dados, img: require('../../images/img2.png'), horario: 'Boa noite', hora: str })
        }

    }

    const getData = () => {
        let dataAtual = new Date();
        var ano = dataAtual.getFullYear();
        var dia = dataAtual.getDate();
        Date.prototype.getMesEmPortugues = function () {
            if (this.getMonth() == 0) { this.mesEmPortugues = "Janeiro" };
            if (this.getMonth() == 1) { this.mesEmPortugues = "Fevereiro" };
            if (this.getMonth() == 2) { this.mesEmPortugues = "Março" };
            if (this.getMonth() == 3) { this.mesEmPortugues = "Abril" };
            if (this.getMonth() == 4) { this.mesEmPortugues = "Maio" };
            if (this.getMonth() == 5) { this.mesEmPortugues = "Junho" };
            if (this.getMonth() == 6) { this.mesEmPortugues = "Julho" };
            if (this.getMonth() == 7) { this.mesEmPortugues = "Agosto" };
            if (this.getMonth() == 8) { this.mesEmPortugues = "Setembro" };
            if (this.getMonth() == 9) { this.mesEmPortugues = "Outubro" };
            if (this.getMonth() == 10) { this.mesEmPortugues = "Novembro" };
            if (this.getMonth() == 11) { this.mesEmPortugues = "Dezembro" };
        };

        dataAtual.getMesEmPortugues();
        return { mes: dataAtual.mesEmPortugues, ano: ano, dia: dia }
    }

    setInterval(setMinute, 1000)

    useEffect(() => {
        setBackgroundImageInfo()
        setMinute()
        getData()
    }, [])


    return (
        <ImageBackground
            style={{
                width: width,
                height: '100%',
                position: 'relative'
            }}
            source={dados.img}>
            <View style={{
                marginTop: 100,
                marginLeft: 30
            }}>
                <Text style={{
                    fontSize: 35,
                    color: '#fff',
                    fontWeight: "500"
                }}>{dados.horario}, Warllei
                </Text>
                <Text style={{ fontSize: 15, color: '#fff' }}>{getData().dia} {getData().mes}, {getData().ano}</Text>
            </View>

            <View style={{
                alignItems: "center",
                marginTop: 160,
            }}>
                <Text style={{
                    fontSize: 40,
                    letterSpacing: -2,
                    color: '#fff',
                    fontWeight: "500"
                }}>{dados.hora} : {minuto}
                </Text>
            </View>



            <LinearGradient
                colors={['#1b198700', '#1b1987bd']} style={{
                    width: width,
                    height: 250,
                    position: "absolute",
                    bottom: 0
                }}>

                <ScrollView horizontal style={{ backgroundColor: "#01176752" }}>

                    {
                        arr.map(_ => {
                            return (
                                <View style={styles.containerTarefas}>
                                    <Icon name="calendar" size={30} color={'#fff'} style={{ marginRight: 10 }} />
                                    <View style={{ width: "90%" }}>
                                        <Text style={{ color: "#fff" }}>14/02/2023 - 12:30 pm</Text>
                                        <Text style={{ color: '#fff' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                    </View>
                                </View>
                            )
                        })
                    }


                </ScrollView>

            </LinearGradient>

            <Navigation />


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    containerTarefas: {
        width: 300,
        marginTop: 40,
        height: 130,
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 10,
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: '#86b5c640'

    }
})

export default Home;