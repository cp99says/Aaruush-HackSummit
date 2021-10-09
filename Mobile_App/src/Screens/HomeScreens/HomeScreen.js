import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Animated,
    Image,
    TouchableOpacity,
    PermissionsAndroid,
} from "react-native";
import {COLORS} from "../../Constants/GlobalStyle";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {ExamCard, SubjectCard} from "../../Components/HomeScreenComponents";
import ImagePicker from "react-native-image-crop-picker";
import DocumentPicker from "react-native-document-picker";
import {FocusAwareStatusBar} from "../../Functions/AppFunctions";
const HomeScreen = () => {
    const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(0));
    const [fadeAnimationImage, setFadeAnimationImage] = useState(new Animated.Value(0));
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool Photo App Camera Permission",
                    message:
                        "Cool Photo App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK",
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // console.log("You can use the camera");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };
    useEffect(() => {
        requestCameraPermission();
        fadeIn();
    }, []);
    const fadeIn = () => {
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
        }).start();
        Animated.timing(fadeAnimationImage, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };
    function OpenCamera() {
        console.log("CALLED");
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }
    async function OpenFilePicker() {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });
            console.log(
                res.uri,
                res.type, // mime type
                res.name,
                res.size
            );
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    }

    return (
        <View style={styles.mainContainer}>
            <FocusAwareStatusBar backgroundColor={COLORS.WHITE} />
            <ImageBackground
                source={require("../../Assets/Images/HomeScreen_BG.png")}
                style={{flex: 1}}
            >
                <View style={styles.container1}>
                    <Image
                        source={{uri: "https://picsum.photos/id/1011/200"}}
                        style={{height: 50, width: 50, borderRadius: 50 / 2, marginLeft: "5%"}}
                    />
                    <MaterialCommunityIcons
                        name={"bell-outline"}
                        size={32}
                        style={{marginRight: "6%"}}
                        color={COLORS.PURPLE}
                    />
                </View>
                <View style={{marginLeft: "5%"}}>
                    <Text style={{fontSize: hp(4), color: COLORS.PURPLE}}>
                        Hello,{"\n"}
                        <Text style={{fontSize: hp(4), color: COLORS.PURPLE, fontWeight: "bold"}}>
                            Chetan 😀
                        </Text>
                    </Text>
                </View>
                <View style={styles.container2}>
                    <View style={{marginLeft: "5%"}}>
                        <Text
                            style={{
                                fontSize: hp(2.8),
                                color: COLORS.PURPLE,
                                fontWeight: "bold",
                                marginBottom: "5%",
                            }}
                        >
                            Subjects
                        </Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                        <SubjectCard
                            imageSource={require("../../Assets/Images/chem.png")}
                            Title={"Chemistry"}
                            Style={{
                                height: 50,
                                alignSelf: "center",
                                width: 50,
                                resizeMode: "contain",
                            }}
                        />
                        <SubjectCard
                            imageSource={require("../../Assets/Images/physics1.png")}
                            Title={"Physics"}
                        />
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={{marginLeft: "5%"}}>
                        <Text
                            style={{
                                fontSize: hp(2.8),
                                color: COLORS.PURPLE,
                                fontWeight: "bold",
                                marginBottom: "5%",
                            }}
                        >
                            Exam
                        </Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                        <ExamCard
                            imageSource={require("../../Assets/Images/camera.png")}
                            Title={"Capture"}
                            onPress={OpenCamera}
                        />
                        <ExamCard
                            imageSource={require("../../Assets/Images/file-upload.png")}
                            Style={{
                                height: 50,
                                alignSelf: "center",
                                width: 50,
                                resizeMode: "contain",
                            }}
                            Title={"Upload"}
                            onPress={OpenFilePicker}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container1: {
        flex: 1,
        justifyContent: "space-between",
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
export default HomeScreen;
