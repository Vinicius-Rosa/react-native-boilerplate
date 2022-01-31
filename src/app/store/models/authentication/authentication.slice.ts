import { createSlice } from "@reduxjs/toolkit";

const TOKEN_KEY = "token_key";

const initialState = {
  token: "",
  username: "",
  clientId: "",
  clinicId: "",
  id: "",
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    cleanAuthInfos: (state) => {
      state.token = initialState.token;
      state.username = initialState.username;
      state.clientId = initialState.clientId;
      state.clinicId = initialState.clinicId;
      state.id = initialState.id;
    },
  },
});

export const getAuthData = async () => {
  //   const accountId = await AsyncStorage.getItem('id');
  //   const clinicId = await AsyncStorage.getItem('clinicId');
  //   const clientId = await AsyncStorage.getItem('clientId');
  //   const name = await AsyncStorage.getItem('name');
  //   return {
  //     name: JSON.parse(name),
  //     accountId: JSON.parse(accountId),
  //     clientId: JSON.parse(clientId),
  //     clinicId: JSON.parse(clinicId),
  //   };
};

export const getTokenKey = async () => {
  /**
   * INSERT TOKEN GETTER
   */
};

export const saveToken = async (token) => {
  /**
   * INSERT TOKEN SETTER
   */
};

export const logout = async () => {
  /**
   * INSERT LOGOUT HANDLER
   */
};

export default authSlice.reducer;
