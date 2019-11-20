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
import {StyleSheet} from 'react-native';

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
      <Content padder>
        <Form>
          <Item floatingLabel error={userDetailsError.emailad}>
            <Label>Email address</Label>
            <Input
              textContentType="emailAddress"
              onChangeText={onUpdateUser('email')}
              value={userDetails.email}
            />
          </Item>
          <Item floatingLabel error={userDetailsError.password}>
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
          <Button
            onPress={() => navigation.replace('Register')}
            block
            bordered
            info
            style={styles.loginButton}>
            <Text>Sign up</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 30,
  },
});

export default Login;
