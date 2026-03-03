import React, { useState } from 'react';
import { View,Text } from 'react-native';

export default function GoalItem({value,status}){

return(
    <View>
        <Text>{value}</Text>
        <Text>{status}</Text>
    </View>

);}