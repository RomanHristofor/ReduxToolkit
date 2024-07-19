import { configureStore, createSlice } from '@reduxjs/toolkit';

const elementsSlice = createSlice({
    name: 'elements',
    initialState: [],
    reducers: {
        addElement: (state) => {
            const color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
            state.unshift({ id: Date.now(), color });
        },
        removeElement: (state) => {
            state.pop();
        }
    }
});

const store = configureStore({
    reducer: {
        elements: elementsSlice.reducer
    }
});

export const { addElement, removeElement } = elementsSlice.actions;
export default store;
