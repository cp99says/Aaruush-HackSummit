import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Animated,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native";
import {COLORS} from "../../Constants/GlobalStyle";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {FocusAwareStatusBar} from "../../Functions/AppFunctions";
import {API_CALL} from "../../Functions/ApiFunctions";
import {Loader} from "../../Components/Components";

export default function SubjectScreen({route}) {
    const [examData, setexamData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        initPageLoadEvents();
    }, []);
    async function initPageLoadEvents(params) {
        const val = await getExamData();
        if (val) {
        }
    }

    async function getExamData(params) {
        const {data} = route.params;
        let subjectName = data;
        try {
            const data = await API_CALL(
                {
                    url: `/api/teacher/exam/subjectwise/${subjectName}`,
                    method: "get",
                },
                {type: "ML"}
            );
            // console.log("data.data", data.data)
            console.log(data);
            setexamData(data.history);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    const renderItemFunc = ({item}) => (
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                margin: 10,
                marginVertical: 8.8,
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("ExamPreview", {data: item});
                }}
                style={styles.card}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Montserrat-Bold",
                            color: COLORS.PURPLE,
                            fontSize: 16,
                            textTransform: "uppercase",
                        }}
                    >
                        #{item.exam_code}
                    </Text>
                    <View
                        style={{
                            height: 20,
                            width: 20,
                            borderRadius: 20 / 2,
                            backgroundColor: item.exam_started ? COLORS.GREEN : COLORS.RED,
                        }}
                    />
                </View>
                <View style={{flex: 1, marginTop: "10%"}}>
                    <Text
                        style={{
                            fontFamily: "Montserrat-Medium",
                            color: COLORS.PURPLE,
                            fontSize: 14,
                            textTransform: "uppercase",
                        }}
                    >
                        {item.exam_topic}
                    </Text>
                </View>
                <View style={{flex: 1, marginTop: "10%"}}>
                    <Text
                        style={{
                            fontFamily: "Montserrat-Medium",
                            color: COLORS.PURPLE,
                            fontSize: 14,
                            alignSelf: "flex-end",
                        }}
                    >
                        {item.questions.length} QUESTIONS
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return loading ? (
        <>
            <FocusAwareStatusBar backgroundColor={COLORS.HEADER_GREY} />
            <Loader />
        </>
    ) : (
        <>
            <FocusAwareStatusBar backgroundColor={COLORS.HEADER_GREY} />
            <View style={styles.mainContainer}>
                <FlatList
                    data={examData}
                    numColumns={2}
                    renderItem={renderItemFunc}
                    keyExtractor={item => item.exam_code}
                />
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
        paddingTop: "2.8%",
    },
    container1: {
        flex: 1,
        justifyContent: "space-between",
        paddingTop: "5%",
        flexDirection: "row",
        alignItems: "center",
    },
    container2: {
        flex: 3,
        marginTop: "-5%",
        justifyContent: "center",
    },
    container3: {
        flex: 3,
        marginTop: "-10%",
    },
    TextContainer: {
        flex: 1,
        justifyContent: "center",
    },
    card: {
        backgroundColor: COLORS.WHITE,
        width: wp(45),
        height: "auto",
        elevation: 4,
        borderRadius: 8,
        padding: 10,
        marginTop: 2,
    },
    buttonLogin: {
        width: wp(80),
        alignSelf: "center",
        paddingVertical: "5%",
        borderRadius: 50,
        backgroundColor: COLORS.PURPLE_LIGHT,
    },
});
