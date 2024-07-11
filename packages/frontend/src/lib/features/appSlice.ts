import { Slice, createSlice } from '@reduxjs/toolkit';
import { SectionId } from '@data/dataDef';
export interface AppState {
    showHeader: boolean;
    backgroundImageMobile: string;
    backgroundImageDesktop: string;
    backgroundColor: string;
    username: string | null;
}
export const initialAppState: AppState = {
    showHeader: true,
    backgroundImageMobile:
        "",
    backgroundImageDesktop:
        "",
    backgroundColor: '',
    username: null,
};
export const appSlice: Slice = createSlice({
    name: 'app',
    initialState: initialAppState,
    reducers: {
        setShowHeader: (state, action) => {
            state.showHeader = action.payload;
        },
        setBackgroundImageMobile: (state, action) => {
            state.backgroundImageMobile = action.payload;
        },
        setBackgroundImageDesktop: (state, action) => {
            state.backgroundImageDesktop = action.payload;
        },
        setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        }
    },
});
export const {
    setShowHeader,
    setBackgroundImage,
    setBackgroundImageDeskto,
    setBackgroundColor,
    setUsername
} = appSlice.actions;
export default appSlice.reducer;
