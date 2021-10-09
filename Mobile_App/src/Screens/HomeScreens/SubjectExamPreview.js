import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    RefreshControl,
    FlatList,
    Image,
    TextInput,
    StatusBar,
    ScrollView,
} from "react-native";
import {COLORS} from "../../Constants/GlobalStyle";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {FocusAwareStatusBar} from "../../Functions/AppFunctions";
import {Loader} from "../../Components/Components";
import {API_CALL} from "../../Functions/ApiFunctions";
import {Table, TableWrapper, Row, Rows, Col, Cols, Cell} from "react-native-table-component";

export default function SubjectExamPreview({route}) {
    const state = {
        tableHead: ["Name", "Marks"],
        tableData: [
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
            ["1", "2"],
        ],
    };
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [examData, setexamData] = useState([]);
    const [rowData, setRowData] = useState([]);
    const [colData, setColData] = useState([]);

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
        let examCode = data.exam_code;
        try {
            const data = await API_CALL(
                {
                    url: `/api/teacher/exam/score/${examCode}`,
                    method: "get",
                },
                {type: "ML"}
            );
            // console.log("data.data", data.data)
            // console.log(data);

            if (data.student_grades) {
                setexamData(data.student_grades);
                let colData = [];
                let rowData = [];
                data.student_grades.forEach(data => {
                    rowData.push([data.student_username, data.score]);
                });
                // setColData(colData);
                setRowData(rowData);
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
        setRefreshing(false);
    }
    const renderItemFunc = ({item}) => (
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                margin: 10,
                marginVertical: 8.8,
                alignItems: "center",
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    // navigation.navigate("SubjectExamPreview", {data: item});
                }}
                style={styles.card}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Image
                        source={{uri: "https://picsum.photos/id/1011/200"}}
                        style={{height: 50, width: 50, borderRadius: 80 / 2, resizeMode: "contain"}}
                    />
                    <Text
                        style={{
                            fontFamily: "Montserrat-Bold",
                            color: COLORS.PURPLE,
                            fontSize: 16,
                            marginLeft: "8%",
                            textTransform: "uppercase",
                        }}
                    >
                        {/* #{item.exam_code} */}
                        {item.student_username}
                    </Text>
                </View>
                <View style={{flex: 1, marginTop: "5%"}}>
                    <Text
                        style={{
                            fontFamily: "Montserrat-Medium",
                            color: COLORS.PURPLE,
                            fontSize: 14,
                            textTransform: "uppercase",
                        }}
                    >
                        {item.score}
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
        <ScrollView
            style={styles.mainContainer}
            contentContainerStyle={{paddingBottom: 120}}
            refreshControl={
                <RefreshControl
                    colors={[COLORS.PURPLE]}
                    refreshing={refreshing}
                    onRefresh={() => {
                        setRefreshing(true);
                        initPageLoadEvents();
                    }}
                />
            }
        >
            <FocusAwareStatusBar backgroundColor={COLORS.HEADER_GREY} />
            {rowData.length == 0 ? (
                <View style={{flex: 1, justifyContent: "center"}}>
                    <Text
                        style={{
                            alignSelf: "center",
                            fontFamily: "Montserrat-Bold",
                            color: COLORS.PURPLE,
                            marginTop: "88%",
                            fontSize: 16,
                            textTransform: "uppercase",
                        }}
                    >
                        No Responses Yet
                    </Text>
                </View>
            ) : (
                <View style={{paddingHorizontal: 20, marginTop: "10%"}}>
                    <Table borderStyle={{borderWidth: 1}}>
                        <Row
                            data={state.tableHead}
                            flexArr={[1, 1]}
                            style={styles.head}
                            textStyle={styles.text}
                        />
                        <TableWrapper style={styles.wrapper}>
                            <Rows
                                data={rowData}
                                flexArr={[1, 1]}
                                style={styles.row}
                                textStyle={styles.textData}
                            />
                        </TableWrapper>
                    </Table>
                </View>
            )}
            {/*
            <FlatList
                data={examData}
                refreshControl={
                    <RefreshControl
                        colors={[COLORS.PURPLE]}
                        refreshing={refreshing}
                        onRefresh={() => {
                            setRefreshing(true);
                            initPageLoadEvents();
                        }}
                    />
                }
                contentContainerStyle={{paddingBottom: 120}}
                renderItem={renderItemFunc}
                keyExtractor={item => item.score}
            /> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

        // paddingBottom: "5%",
    },
    card: {
        width: wp(95),
        elevation: 5,
        backgroundColor: COLORS.WHITE,
        marginVertical: "2%",
        alignSelf: "center",
        borderRadius: 5,
        padding: 15,
    },
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: "#fff",
    },
    head: {
        height: 40,
        backgroundColor: COLORS.PURPLE_LIGHT,
    },
    wrapper: {
        flexDirection: "row",
    },
    title: {
        flex: 1,
        backgroundColor: COLORS.PURPLE_LIGHT,
    },
    row: {
        height: 28,
    },
    text: {
        textAlign: "center",
        color: COLORS.WHITE,
    },
    textData: {
        textAlign: "center",
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
    buttonRegister: {
        width: wp(80),
        alignSelf: "center",
        paddingVertical: "5%",
        borderRadius: 50,
        backgroundColor: COLORS.ORANGE,
        marginBottom: "7.4%",
    },
    buttonLogin: {
        width: wp(80),
        alignSelf: "center",
        paddingVertical: "5%",
        borderRadius: 50,
        backgroundColor: COLORS.PURPLE_LIGHT,
    },
});
