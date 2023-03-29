import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem('IToken') || null,
  userAccount: null,
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLogged = true
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    isLogged: (state) => {
      state.isLogged = true;
    },
    setUserAccount: (state, action) => {
      state.userAccount = action.payload;
    },
    increaseCoinAmount: (state, { payload }) => {
      switch (payload.type) {
        case "invest":
          state.userAccount.invRex = +state.userAccount.invRex + +payload.amount;
          break;
        case "deposit":
          state.userAccount.depRex = +state.userAccount.depRex + +payload.amount;
          break;
        case "withdraw":
          state.userAccount.witRex = +state.userAccount.witRex + +payload.amount;
          break;
        default:
            return null
      }
    },
    decreaseCoinAmount: (state, { payload }) => {
      switch (payload.type) {
        case "invest":
          state.userAccount.invRex = +state.userAccount.invRex - +payload.amount;
          break;
        case "deposit":
          state.userAccount.depRex = +state.userAccount.depRex - +payload.amount;
          break;
        case "withdraw":
          state.userAccount.witRex = +state.userAccount.witRex - +payload.amount;
          break;
        default:
            return null
      }
    },
  },
});

export const { setUser, setToken, isLogged, setUserAccount, increaseCoinAmount, decreaseCoinAmount } =
  userSlice.actions;

export default userSlice.reducer;
