import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../config";
import axios from "axios";




export const adminGetOrderById = createAsyncThunk("admin/order/id", async (id) => {

    const token= document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

    const apiUrl = config.apiBaseUrl
    const response = await axios.get(apiUrl + `/admin/order/${id}`,{
        headers: {
            access_token: token
        }
    })
    return response.data
})



export const adminGetAllOrder = createAsyncThunk('order/admin/getAllOrder', async (params = {}) => {
    const token= document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

    const apiUrl = config.apiBaseUrl;

    try {
        const response = await axios.get(apiUrl + "/admin/v2/order", {
            params,
            headers: {
                access_token: token
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});


export const adminDeletOrderById = createAsyncThunk('order/admin/delete', async (id) => {
    const token= document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];

    const apiUrl = config.apiBaseUrl;

    try {
       
       await axios.delete(apiUrl + `/admin/order/${id}`, {
            headers: {
                access_token: token
            }
        });
        return id;
    } catch (error) {
        console.log(error);
        throw error;
    }
});


const orderSlice = createSlice({
    name: 'order',
    initialState: {
        data: {},
    },
    reducers: {
        setOrder: (state, action) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminGetOrderById.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(adminGetAllOrder.fulfilled, (state, action) => {
                state.data = action.payload
            })
    }
})
export const orderSelector = {
    selectOrder: (state) => state.order.data,
}

export default orderSlice.reducer