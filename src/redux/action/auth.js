import { Axios } from "axios";
import { showMessage } from "../../utils";
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

            if (photoReducer.isUploadPhoto) {
                const photoForUpload = new FormData();
                photoForUpload.append('file', photoReducer);
                Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
                    headers: {
                        'Authorization': `${res.data.data.token_type} ${res.data.data.access_token}`,
                        "Content-Type": "multipart/form-data",
                    }
                })
                    .then(resUpload => {
                        console.log('upload success: ', resUpload);
                    })
                    .catch(err => {
                        console.log('upload error: ', err);
                    })
            }


            dispatch(setLoading(false));
            showMessage("Register success", 'success');
            navigation.navigate('SuccessSignUp');
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