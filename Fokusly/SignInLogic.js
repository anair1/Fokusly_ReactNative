import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

const SignInLogic = () => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePass] = React.useState('');

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder='Email'
                />
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={onChangePass}
                value={password}
                placeholder='Password'
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height:40,
        width:250,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 20,
    },
});

export default SignInLogic;