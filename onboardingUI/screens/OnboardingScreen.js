import React from 'react';

import { View, Text, Button, StyleSheet, Image, Dimensions,TouchableOpacity } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) =>{

    const Skip = () =>(
        <TouchableOpacity 
        title="Skip"
        color='#000'
        onPress={() => navigation.navigate("Login") }
       
        >
        <Text style={{ fontSize: 20, color:'white'}}> Skip </Text>
    </TouchableOpacity>
    )


    const Next = ({ ...props }) =>(
        <TouchableOpacity 
        
        onPress={() => navigation.navigate("Login") }
        { ...props }
        >
            <Text style={{ fontSize: 20, color:'white'}} > Next </Text>
        </TouchableOpacity>
    )

    return(
        <Onboarding

        SkipButtonComponent={Skip}
        NextButtonComponent ={ Next }
        onSkip= { () => navigation.navigate("Login") }
        onDone= { () => navigation.navigate("Login") }

  pages={[
    {
      backgroundColor: '#2475B0',
      image: <Image source={require('../assests/3.png')}
      style={{ resizeMode:'contain', width: 400,
    height: 400
    }}
      />,
      title: 'Onboarding 1',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    {
        backgroundColor: '#10A881',
        image: <Image source={require('../assests/2.png')}
        style={{ resizeMode:'contain', width: 400,
        height: 400}}
        />,
        title: 'Onboarding 2',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#E83350',
        image: <Image source={require('../assests/3.png')}
        style={{ resizeMode:'contain', width: 400,
    height: 400
    }}
        />,
        title: 'Onboarding 3',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
    
  ]}
/>
    );
};


export default OnboardingScreen;