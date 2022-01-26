
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initiaCounterlState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initiaCounterlState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.counter = !state.counter;
        }
    }

})

const intialAuthState = {
    isAuth: true
}

const authSlise = createSlice({
    name: 'auth',
    initialState: intialAuthState,
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        }
    }
})


const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlise.reducer }
});

export const counterActions = counterSlice.actions;
export const authAction = authSlise.actions;

export default store;