import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './src/routes/stack.routes';
import Home from './src/screens/home';


export function Stack() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}