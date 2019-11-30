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
  Toast,
  View,
} from 'native-base';
import Config from 'react-native-config';
import isEmpty from 'lodash.isempty';
import {StyleSheet, ActivityIndicator, TouchableOpacity} from 'react-native';

const Register = ({navigation}) => {
  const [isRegistering, setRegistering] = useState(false);
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

  const register = async () => {
    if (!validate()) {
      return;
    }

    setRegistering(true);
    try {
      await fetch(`${Config.API_URL}/signup`, {
        method: 'POST',
      });
      setRegistering(false);
      navigation.navigate('Home');
    } catch (error) {
      setRegistering(false);
      Toast.show({
        text: 'Oops! Something happened when registering.',
        buttonText: 'Try Again',
        type: 'danger',
      });
    }
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
            error={userDetailsError.businessName}>
            <Label>Business name</Label>
            <Input
              textContentType="organizationName"
              onChangeText={onUpdateUser('businessName')}
              value={userDetails.businessName}
            />
          </Item>
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
          <Item
            style={styles.item}
            floatingLabel
            error={userDetailsError.confirmPassword}>
            <Label>Confirm password</Label>
            <Input
              textContentType="password"
              onChangeText={onUpdateUser('confirmPassword')}
              value={userDetails.confirmPassword}
              secureTextEntry
            />
          </Item>
          <Button
            disabled={isRegistering}
            onPress={register}
            block
            primary
            style={styles.registerButton}>
            {isRegistering ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text>Sign up</Text>
            )}
          </Button>
          <View style={styles.info}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.replace('Login')}>
              <Text style={styles.infoButton}>Log in</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  registerButton: {
    marginTop: 30,
  },
  content: {
    justifyContent: 'center',
    flex: 1,
  },
  item: {
    marginLeft: 0,
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

export default Register;
