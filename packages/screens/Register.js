import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const Register = () => {
  const [userDetails, onChangeUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const onUpdateUser = field => value =>
    onChangeUserDetails({...userDetails, [field]: value});
  return (
    <View style={styles.register}>
      <Text>Register Screen</Text>
      <TextInput
        placeholder="First name"
        textContentType="giveName"
        style={styles.textInput}
        onChangeText={onUpdateUser('firstName')}
        value={userDetails.firstName}
      />
      <TextInput
        placeholder="Last name"
        textContentType="familyName"
        style={styles.textInput}
        onChangeText={onUpdateUser('lastName')}
        value={userDetails.lastName}
      />
      <TextInput
        placeholder="Email Address"
        textContentType="emailAddress"
        style={styles.textInput}
        onChangeText={onUpdateUser('email')}
        value={userDetails.email}
      />
      <TextInput
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
        style={styles.textInput}
        onChangeText={onUpdateUser('password')}
        value={userDetails.password}
      />
      <Button title="Register" onPress={() => ({})} />
    </View>
  );
};

const styles = StyleSheet.create({
  register: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    padding: 5,
  },
});

export default Register;
