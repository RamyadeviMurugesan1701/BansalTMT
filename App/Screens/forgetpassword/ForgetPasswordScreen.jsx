import { t } from "i18next";
import { useEffect } from "react";
import { View,Text, StyleSheet ,Pressable, Linking,BackHandler} from "react-native"
useEffect
function ForgetPasswordScreen({route, navigation}){
  useEffect(() => {
    const backAction = () => {
        navigation.goBack();
        return true;
      }
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]);
    const text = route.params?.text;
    const makePhoneCall = (phoneNumber) => {
        const url = `tel:${phoneNumber}`;
        
        Linking.canOpenURL(url)
          .then((supported) => {
            if (supported) {
              Linking.openURL(url);
            } else {
              console.error('Phone call is not supported on this device.');
            }
          })
          .catch((error) => {
            console.error('An error occurred when trying to make a phone call: ', error);
          });
      };
    return(
        <View style={{flex:1, backgroundColor:'white'}}>
          <View style={{width:'93%'}}>
            <Text style={{fontSize:18,color:'rgba(57, 57, 57, 1)', fontFamily:'Poppins-Regular',marginLeft:10}}>{t('connect')} {text}</Text>
            <Text style={{color:'rgba(132, 132, 132, 1)', fontSize:15,marginTop:5, fontFamily:'Poppins-Regular',marginLeft:10}}>{t('calltext')}</Text>
          </View>
            <View style={styles.modalButtonContainer}>
                <Pressable style={{ marginBottom: 10, borderRadius: 5, width: '100%', backgroundColor: 'rgba(177, 41, 44, 1)', alignItems: 'center', height: 48, radius: 4, padding: 12 }} onPress={() => makePhoneCall('9109176304')}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontWeight: '500', fontSize: 16, lineHeight: 24, color: '#ffffff', height: 24 }}>
                        {t('call')}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    modalButtonContainer: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        alignSelf:'center'
    }
})
export default ForgetPasswordScreen;