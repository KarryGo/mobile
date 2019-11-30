import React, {useState} from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Text,
  Input,
  Label,
  Button,
} from 'native-base';
import isEmpty from 'lodash.isempty';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
  const [userDetails, onChangeUserDetails] = useState({
    email: '',
    password: '',
  });
  const [userDetailsError, setUserDetailsError] = useState({});
  const validate = () => {
    let errors = {};
    if (!userDetails.email) {
      errors.email = true;
    }

    if (!userDetails.password) {
      errors.password = true;
    }
    setUserDetailsError(errors);
    return isEmpty(errors);
  };

  const login = () => {
    if (!validate()) {
      return;
    }

    return 'hello';
  };
  const onUpdateUser = field => value => {
    setUserDetailsError({...userDetailsError, [field]: false});
    onChangeUserDetails({...userDetails, [field]: value});
  };
  return (
    <Container>
      <Content
        scrollEnabled={false}
        padder
        contentContainerStyle={styles.content}>
        <Form>
          <Item
            style={styles.item}
            floatingLabel
            error={userDetailsError.email}>
            <Label>Email address</Label>
            <Input
              textContentType="emailAddress"
              onChangeText={onUpdateUser('email')}
              value={userDetails.email}
            />
          </Item>
          <Item
            style={styles.item}
            floatingLabel
            error={userDetailsError.password}>
            <Label>Password</Label>
            <Input
              secureTextEntry
              textContentType="password"
              onChangeText={onUpdateUser('password')}
              value={userDetails.password}
            />
          </Item>
          <Button onPress={login} block primary style={styles.loginButton}>
            <Text>Login</Text>
          </Button>
          <View style={styles.info}>
            <Text>Don't have an account yet?</Text>
            <TouchableOpacity onPress={() => navigation.replace('Register')}>
              <Text style={styles.infoButton}>Register</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 30,
  },
  item: {
    marginLeft: 0,
  },
  content: {
    justifyContent: 'center',
    flex: 1,
  },
  info: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoButton: {
    color: '#007aff',
    textDecorationLine: 'underline',
  },
});

export default Login;
