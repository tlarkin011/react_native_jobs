import React from 'react'

import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import {icons, SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello T-Dog</Text>

      </View>
    </View>
  )
}

export default Welcome