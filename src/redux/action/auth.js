import { Axios } from "axios";
import { showMessage, storeData } from "../../utils";
import { setLoading } from "./global";

const platform = Platform.OS === 'android' ? '10.0.2.2' : '127.0.0.1';

const API_HOST = {
    url: 'http://${platform}:8000/api',
}

export const singUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {   

    Axios.post(`${API_HOST.url}/register`, dataRegister, {
        timeout: 10000,
    })
        .then(res => {
            console.log('data success: ', res.data);
            const profile = res.data.data.user
            const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
            // data user
            
            // data token 
            storeData("token", {value: token})

            if (photoReducer.isUploadPhoto) {
                const photoForUpload = new FormData();
                photoForUpload.append('file', photoReducer);
                Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
                    headers: {
                        'Authorization': token,
                        "Content-Type": "multipart/form-data",
                    }
                }).then(resUpload => {
                     profile.profile_photo_url = `http://${platform}:8000/storage/${resUpload.data.data[0]}`;
                    storeData("userProfile", profile);
                    navigation.reset({index: 0, routes:  [{name : 'SuccessSignUp'}]});
                })
                    
                    .catch(err => {
                        showMessage("Upload photo tidak berhasil")
                        navigation.reset({index: 0, routes:  [{name : 'SuccessSignUp'}]}); 
                    })
            } else {
                storeData("userProfile", profile);
                navigation.reset({index: 0, routes:  [{name : 'SuccessSignUp'}]});
            }


            dispatch(setLoading(false));            
            
        })
        .catch(err => {
            console.log('register error: ', err);
            const isTimeout = err.code === 'ECONNABORTED' || err.code === 'ETIMEDOUT';
            const message = isTimeout
                ? 'Koneksi timeout. Silakan coba lagi.'
                : err?.response?.data?.message || err?.message || 'Registrasi gagal';
            showMessage(message, 'danger');
        })
        .finally(() => {
            dispatch(setLoading(false));
        });
}