import React, { useState, useRef } from 'react';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from './Signup.styles';

const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('enter all fields');
    } else {
      alert('successfully registered, Welcome Aboard');
    }
  };

  const setInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const ref = useRef(null);
  return (
    <Container ref={ref}>
      <FormWrap onSubmit={onSubmit}>
        <Icon to='/'>Vest</Icon>

        <FormContent>
          <Form action='#'>
            <FormH1>Join us in Vesting</FormH1>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <FormInput name='email' type='email' required value={email} onChange={setInputs} />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <FormInput
              name='password'
              type='password'
              required
              value={password}
              onChange={setInputs}
            />
            <FormButton type='submit'>Let's Go</FormButton>
            <Text>Forgot Password ?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signup;
