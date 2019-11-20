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

const Register = ({navigation}) => {
  const [userDetails, onChangeUserDetails] = useState({
    businessName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [userDetailsError, setUserDetailsError] = useState({});
  const validate = () => {
    let errors = {};
    if (
      userDetails.password !== userDetails.confirmPassword ||
      !userDetails.password ||
      !userDetails.confirmPassword
    ) {
      errors.password = true;
      errors.confirmPassword = true;
    }

    if (!userDetails.businessName) {
      errors.businessName = true;
    }

    if (!userDetails.email) {
      errors.email = true;
    }
    setUserDetailsError(errors);
    return isEmpty(errors);
  };

  const register = () => {
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
          <Item floatingLabel error={userDetailsError.businessName}>
            <Label>Business name</Label>
            <Input
              textContentType="organizationName"
              onChangeText={onUpdateUser('businessName')}
              value={userDetails.businessName}
            />
          </Item>
          <Item floatingLabel error={userDetailsError.email}>
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
          <Item floatingLabel error={userDetailsError.confirmPassword}>
            <Label>Confirm password</Label>
            <Input
              textContentType="password"
              onChangeText={onUpdateUser('confirmPassword')}
              value={userDetails.confirmPassword}
              secureTextEntry
            />
          </Item>
          <Button
            onPress={register}
            block
            primary
            style={styles.registerButton}>
            <Text>Sign up</Text>
          </Button>
          <Button
            onPress={() => navigation.replace('Login')}
            block
            bordered
            info
            style={styles.registerButton}>
            <Text>Login</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  registerButton: {
    marginTop: 30,
  },
});

export default Register;
