// Copyright (C) 2018, Zpalmtree
//
// Please see the included LICENSE file for more information.

import React from 'react';

import {
    View, Image, Text
} from 'react-native';

import Globals from './Globals';

import { Styles } from './Styles';

/**
 * Send a transaction
 */
export class TransferScreen extends React.Component {
    static navigationOptions = {
        title: 'Transfer',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={require('../assets/img/logo.png')}
                        style={Styles.logo}
                    />
                </View>
                <Text>Your wallet address: {Globals.wallet.getPrimaryAddress()}</Text>
            </View>
        );
    }
}
