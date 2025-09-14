import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';

export default function Notifications() {
    const navigation = useNavigation();
    const openDrawer = ()=>{
        navigation.dispatch(DrawerActions.openDrawer())
    }
  return (
    <View style={{padding: 20, alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>Notifications</Text>
      <Button title="open drawer" onPress={openDrawer}/>
    </View>
  )
}