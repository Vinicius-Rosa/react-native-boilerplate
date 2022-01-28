import React, { useCallback, useReducer } from "react";

import { Container, Title, Subtitle, Divider } from "./styles";

// import useMerge from 'src/app/hooks/useMerge';
import { Loading, Button, Input } from "src/components";

const reducer = (state, record) => ({ ...state, ...record });

const initialState = {
  isLoading: true,
  username: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { merge, loading } = useMerge({ route: '/accounts/authenticate' });

  const changeInput = useCallback((value, name) => {
    dispatch({ [name]: value });
  }, []);

  const submitLogin = useCallback(async () => {
    navigation.navigate("LoggedStack");

    // try {
    //   const { data } = await merge(state);
    //   if (data) {
    //     await saveAuthData(data);
    //   navigation.navigate('Home');
    //   }
    // } catch (error) {
    //   console.debug("error", error);
    // }
  }, [navigation]);

  return (
    <Container>
      <Title>Bem-vindo(a)!</Title>
      <Subtitle>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </Subtitle>

      <Input
        label="Usuário:"
        placeholder="Informar usuário"
        onChange={() => {}}
        value={state.username}
      />
      <Divider />

      <Input
        label="Senha:"
        placeholder="**********"
        onChange={() => {}}
        value={state.password}
        secureTextEntry
      />

      <Divider />
      <Divider />

      <Button onPress={submitLogin}>Entrar</Button>
      {state.loading && <Loading />}
    </Container>
  );
};
