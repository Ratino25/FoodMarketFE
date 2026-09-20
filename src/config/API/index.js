import { Platform } from "react-native";

const platform = Platform.OS === 'android' ? '10.0.2.2' : '127.0.0.1';
// const platform = '127.0.0.1';

export const API_HOST = {
    url: `http://${platform}:8000/api`,
}  