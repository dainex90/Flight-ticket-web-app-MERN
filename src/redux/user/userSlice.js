import { createSlice } from "@reduxjs/toolkit";

const user = {
    email: "",
    password: "",
    loggedIn: false
}

export const userSlice = createSlice({
    name: "user",
    initialState: user,
    reducers: {
        addUser: (state, action) => {
            const { email, password} = action.payload;
            state.email = email;
            state.password = password;
            state.loggedIn = true;
        },
        getUserEmail: (state) => {
            return state.email;
        },
        signOut: (state) => {
            state.email = "";
            state.password = "";
            state.loggedIn = false;
        }
    }
})

export const { addUser, getUserEmail, signOut} = userSlice.actions;

export default userSlice.reducer;