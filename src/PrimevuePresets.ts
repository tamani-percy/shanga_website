import {definePreset} from "@primevue/themes";
import Lara from "@primevue/themes/lara";

export const MyPreset = definePreset(Lara, {
    semantic: {
        primary: {
            100: "#D3D5D8",
            200: "#A7ABB0",
            300: "#7B8088",
            400: "#4F555F",
            500: "#343A40",
            600: "#2E3339",
            700: "#272C31",
            800: "#1F2428",
            900: "#171C1F"
        },
        secondary: {
            100: "#E0FFF9",
            200: "#B3FFF2",
            300: "#80FFE9",
            400: "#4DFFE0",
            500: "#07FFDC",
            600: "#06E0C4",
            700: "#05B3A0",
            800: "#03807A",
            900: "#024D4D"
        },
        tertiary: {
            100: "#FBF8F7",
            200: "#F6F1EF",
            300: "#F2E9E6",
            400: "#EDE2DE",
            500: "#F4EDEA",
            600: "#D6CEC9",
            700: "#B3AAA4",
            800: "#8F8680",
            900: "#6B635D"
        },
    }
});