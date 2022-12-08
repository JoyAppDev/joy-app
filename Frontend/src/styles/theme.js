import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#FF8A00",
            disabled: "rgba(0, 0, 0, 0.4)"
        },
        secondary: {
            main: "rgba(0, 0, 0, 0.4)",
        },
        custom: {
            white: "#ffffff",
            grey: "rgba(0, 0, 0, 0.6)",
            greyDark: "rgba(0, 0, 0, 0.87)",
            blue: "#3767e2",
            blueLight: "#1976d2"
        }
    },
    components: {
        // Name of the component
        MuiOutlinedInput: {
            styleOverrides: {
                // Name of the slot
                root: {
                    fontSize: 16,
                    lineHeight: 24,
                    letterSpacing: .15,
                    borderRadius: 4,
                    border: "1px solid rgba(0, 0, 0, 0.23)",
                    minWidth: 460,
                    minHeight: 56,
                    marginTop: 0,
                },

            },
        },
    },
});