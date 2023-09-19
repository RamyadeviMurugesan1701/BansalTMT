import { Text, View ,Pressable, StyleSheet} from "react-native";
import RightArrowIcon from "../../../assets/Icon/RightArrowIcon";
import { useTranslation } from 'react-i18next';

const ContactScreen = () => {
    const { t } = useTranslation();
    const contactData=[
        {
            id:1,
            title:t('email'),
            arrowImage: <RightArrowIcon width={24} height={24} color="#393939"/>,
        },
        {
            id:2,
            title:t('whatsapp'),
            arrowImage: <RightArrowIcon width={24} height={24} color="#393939"/>,
        },
        {
            id:3,
            title:t('call'),
            arrowImage: <RightArrowIcon width={24} height={24} color="#393939"/>,
        },

    ]
    return(
        <View style={{flex:1, backgroundColor:'white'}}>
          {contactData.map((data,index) => {
            return(
                <Pressable key={index} style={styles.listContainer}>
                    <Text style={styles.listTitle}>{data.title}</Text>
                    {data.arrowImage}
                </Pressable>
            )
          })}
        </View>
    )

}

const styles = StyleSheet.create({
    listContainer:{
        width:'90%',
        height:60,
        backgroundColor:'white',
        elevation: 5,
        marginTop:15,
        alignSelf:'center',
        borderRadius:8,
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center'
    },
    listTitle:{
        color:'#393939',
        marginLeft:20,
        fontWeight:'500',
        fontSize:16,
        fontFamily:'Poppins'
    },
})
export default ContactScreen;