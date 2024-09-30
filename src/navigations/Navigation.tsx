import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from '@utils/NavigationUtils';
import SplashScreen from '@features/slash/SplashScreen';
import CustomerLogin from '@features/auth/CustomerLogin';
import DeliveryLogin from '@features/auth/DeliveryLogin';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="CustomerLogin" options={{ animation: 'fade' }} component={CustomerLogin} />
        <Stack.Screen name="DeliveryLogin" options={{ animation: 'fade' }} component={DeliveryLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
