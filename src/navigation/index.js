import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import DeliveryNavigator from './delivery';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <DeliveryNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
