import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SuccessIcon from "../../../assets/Icon/SuccessIcon";
import { Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { OrderPointsService,OrderPointsServiceRedeem } from "../../service/Orders/successPoints";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

function SuccessScreen({route}){
  const { t } = useTranslation();
  const [roles,setRoles]=useState()
  const [points,setPoints]=useState('')
     const {title,content,addressItem,selectedProduct,uiParams,page,ton} = route?.params;
     let pages=page
     
     const navigation=useNavigation()
useEffect(() => {
  const getValueFromStorage = async () => {
      try {
        const user = await AsyncStorage.getItem('role'); 
        setRoles(user)
        orderPoints(user)
        
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };
  getValueFromStorage();
  
  
}, [addressItem]);

const orderPoints=(user)=>{
  if(page==='orders')
  {
    OrderPointsService(user,ton).then((res) => {

      if(res.status === 200){
          setPoints(res.data.points)
      }
  })
  }
  else{
    OrderPointsServiceRedeem(user).then((res) => {

      if(res.status === 200){
          setPoints(res.data.points)
      }
  })
  }
}
  return(
    <ImageBackground source={require('../../../assets/Images/Success_bg.png')} style={{width:'98%', height:200,alignSelf:'center',backgroundColor:'white',flex:1}}>
        <View style={{alignSelf:'center',marginTop:80}}>
            <SuccessIcon/>
        </View>
        <View>
            <Text style={{color:'rgba(127, 176, 105, 1)', fontSize:16, textAlign:'center',fontFamily:'Poppins-Medium',marginTop:10}}>{title}</Text>
            <Text style={{width:300,color:'#848484',fontWeight:'400', fontSize:13.33, textAlign:'center',fontFamily:'Poppins-Regular',marginTop:10,alignSelf:'center',lineHeight:20}}>{content}</Text>
        </View>
       <View style={[styles.container,styles.shadowProp]}>
        {pages=="orders" ?
        <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'#848484',paddingBottom:25}}>
            <Text style={{width:95,height:28,fontFamily:'Poppins-Medium',
            fontWeight:'500',fontSize:19.2,lineHeight:28,color:'#393939'}}>+{points} t{('points3')}</Text>
            <TouchableOpacity style={{borderRadius:8,paddingHorizontal:15,paddingVertical:8,backgroundColor:'rgba(31, 134, 255, 0.2)',justifyContent:'center',}}>
              <Text style={{width:70,height:16,fontFamily:'Poppins-Medium',
            fontWeight:'500',fontSize:11.2,lineHeight:16,alignItems:'center',color:'#1F86FF'}}>{t('Processing')}</Text>
            </TouchableOpacity>
            
            </View> : <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'#848484',paddingBottom:25}}>
            <Text style={{width:95,height:28,fontFamily:'Poppins-Medium',
            fontWeight:'500',fontSize:19.2,lineHeight:28,color:'#393939'}}>-{selectedProduct.points} {t('points3')}</Text>
            <TouchableOpacity style={{borderRadius:8,paddingHorizontal:15,paddingVertical:8,backgroundColor:'rgba(24, 183, 88, 0.2)',justifyContent:'center',}}>
              <Text style={{width:58,height:16,fontFamily:'Poppins-Medium',
            fontWeight:'500',fontSize:11.2,lineHeight:16,alignItems:'center',color:'#18B758'}}>{t('Redeemed')}</Text>
            </TouchableOpacity>
            
            </View>}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}>
              <Text style={styles.description}>{uiParams.Product}</Text>
              {pages=='orders'?
               <Text style={[styles.descriptionValues,{color:'#B1292C'}]}>{addressItem.quantity} {t('Ton')}</Text>
              :
              <Text style={[styles.descriptionValues,{color:'#B1292C'}]}>{selectedProduct.title}</Text> }
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
              <Text style={styles.description}>{uiParams.Name}</Text>
              {pages=='orders'?
               <Text style={[styles.descriptionValues,{width:150}]}>{addressItem.selectedItem.id} </Text>
              :
              <Text style={styles.descriptionValues}>{addressItem.name}</Text>
              } 
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
              <Text style={styles.description}>{uiParams.Mobile}</Text>
              {pages=='orders'?
               <Text style={styles.descriptionValues}>{addressItem.selectedItem.mobile} </Text>
              :
              <Text style={styles.descriptionValues}>{addressItem.mobile}</Text> }
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
              
               <Text 
              style={styles.description}>{uiParams.Address}</Text>
              {pages=='orders'?
               <Text style={styles.descriptionValues}>{addressItem.selectedItem.district_name},{addressItem.selectedItem.state_name}</Text>
              :
              <Text style={[styles.descriptionValues,{width:120}]}>
                {addressItem.address_1},{addressItem.address_2},{addressItem.land_mark},
              {addressItem.city},{addressItem.state}</Text> }
            </View>
            
       </View>
       <View style={styles.modalButtonContainer}>
              <Pressable style={styles.referButton} onPress={()=>{navigation.navigate('Home')}}>
                <Text style={styles.referButtonText}>
              { t('GoBackHome')}
                </Text>
              </Pressable>
            </View>
    </ImageBackground>
  )
}
export default SuccessScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 10,
    height:250,
    width:'87%',
    paddingRight:20,
    paddingTop:20,
    paddingLeft:24,
    borderRadius: 5,
    margin: 10,
    marginLeft:25,
    borderRadius:10
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
},
description:{
  fontFamily:'Poppins-Regular',
  fontWeight:'400',
  fontSize:13.33,
  lineHeight:20,
  color:'#848484',
  textAlign:'left'
},
descriptionValues:{
  textAlign:'right',
  fontFamily:"Poppins-Medium",
  color:"#393939",
  fontSize:13.33,
  fontWeight:"500"},
  modalButtonContainer: {
    width:'87%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center'
  },
  referButton: {
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
    backgroundColor: 'rgba(177, 41, 44, 1)',
    alignItems: 'center',
    height: 48,
    radius: 4,
    padding: 12,
  },
  referButtonText: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#ffffff',
    height: 24,
  },
});