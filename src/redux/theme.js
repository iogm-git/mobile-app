import { darkTheme, lightTheme } from "@root/utils/Styles";

export const toggleTheme = (theme) => ({
    type: 'TOGGLE_THEME',
    payload: theme
});

const initialState = {
    theme: 'light',
    colors: lightTheme
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                theme: action.payload,
                colors: action.payload === 'light' ? lightTheme : darkTheme
            };
        default:
            return state;
    }
};

export default themeReducer;
