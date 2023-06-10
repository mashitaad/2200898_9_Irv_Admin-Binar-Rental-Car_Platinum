import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config';


export const admingetAllCars = createAsyncThunk("car/getAllCars", async (params = {}) => {
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];


    const apiUrl = config.apiBaseUrl

    try {

        const response = await axios.get(apiUrl + "/admin/v2/car", {
            params,
            headers: {
                access_token: token
            }
        })
        return response.data
    } catch (error) {
        console.log(error);
        throw error;
    }
})


const carSlice = createSlice({
    name: "car",
    initialState: {
        data: {},
        loading: true,

    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(admingetAllCars.fulfilled, (state, action) => {
                state.data = action.payload
                state.loading = false
            })
            .addCase(admingetAllCars.pending, (state, action) => {
                state.loading = true
            })
    }
})
export const carSelectors = {
    selectCars: (state) => state.car.data,
    loading: (state) => state.car.loading,
}
export default carSlice.reducer;