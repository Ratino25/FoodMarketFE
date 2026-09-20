import axios from "axios";
import { API_HOST } from "../../config";

export const getFoodData = () => (dispatch) => {
    axios.get(`${API_HOST.url}/food`)
    .then(res =>  {
        console.log('get food success: ', res.data.data.data);
        dispatch({type: 'SET_FOOD', value: res.data.data.data });
    })
    .catch(err => {
        console.log('get food error: ', err);
    })
}

export const getFoodDataByTypes = (types) => (dispatch) => {
    axios.get(`${API_HOST.url}/food?types=${types}`)
    .then(res =>  {
        if(types == 'new_food'){
            dispatch({type: 'SET_NEW_TASTE', value: res.data.data.data });
        }
        if(types == 'POPULAR'){
            dispatch({type: 'SET_POPULAR', value: res.data.data.data });
        }
        if(types == 'recommended'){
            dispatch({type: 'SET_RECOMMENDED', value: res.data.data.data });
        }
        
    })
    .catch(err => {
        console.log('get food error: ', err);
    })
}