import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import React, { FC, useState } from 'react';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import CustomSafeAreaView from '@components/global/CustomSafeAreaView';
import ProductSlider from '@components/login/ProductSlider';
import { resetAndNavigate } from '@utils/NavigationUtils';
import { CustomText } from '@components/ui/CustomText';
import { Fonts } from '@utils/Constants';
import { CustomInput } from '@components/ui/CustomInput';
const CustomerLogin: FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [gestureSequence, setGestureSequence] = useState<string[]>([]);

  const handleGesture = ({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      const { translationX, translationY } = nativeEvent;
      let direction = '';
      if (Math.abs(translationX) > Math.abs(translationY)) {
        direction = translationX > 0 ? 'right' : 'left';
      } else {
        direction = translationY > 0 ? 'down' : 'up';
      }
      const newSequence = [...gestureSequence, direction].slice(-5);
      setGestureSequence(newSequence);
      console.log(newSequence);
      if (newSequence.join(' ') === 'up up down left right') {
        setGestureSequence([]);
        resetAndNavigate('DeliveryLogin');
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <CustomSafeAreaView>
          <ProductSlider />
          <PanGestureHandler onHandlerStateChange={handleGesture}>
            <Animated.ScrollView
              bounces={false}
              keyboardDismissMode={'on-drag'}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={styles.subContainer}
            >
              <View style={styles.content}>
                <Image source={require('@assets/images/logo.png')} style={styles.logo} />
                <CustomText variant="h2" fontFamily={Fonts.Bold}>
                  India's last minute app
                </CustomText>
                <CustomText variant="h5" fontFamily={Fonts.SemiBold} style={styles.text}>
                  Log in or Sign up
                </CustomText>
                <CustomInput
                  onChangeText={(text) => setPhoneNumber(text.slice(0, 10))}
                  onClear={() => setPhoneNumber('')}
                  value={phoneNumber}
                  left={
                    <CustomText style={styles.phoneText} variant="h6" fontFamily={Fonts.SemiBold}>
                      +91
                    </CustomText>
                  }
                  placeholder="Enter mobile number"
                  inputMode="numeric"
                />
              </View>
            </Animated.ScrollView>
          </PanGestureHandler>
        </CustomSafeAreaView>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'center',
    marginBottom: 20
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginVertical: 10
  },
  text: {
    marginTop: 2,
    marginBottom: 25,
    opacity: 0.8
  },
  phoneText: {
    marginLeft: 10
  }
});

export default CustomerLogin;
