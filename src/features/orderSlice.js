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


export const adminUpdateOrder = createAsyncThunk("order/admin/update", async ({ id, params }) => {
    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
    const apiUrl = config.apiBaseUrl
    try {
        const response = await axios.patch(apiUrl + `/admin/order/${id}`,
            params, {
            headers: {
                "content-type": "application/json",
                access_token: token
            }
        })

        return response.data
    } catch (err) {
        console.log(err)
    }
})


const orderSlice = createSlice({
    name: 'order',
    initialState: {
        data: {},
        filteredPendingOrder : [],
        filteredOnProccessOrder :[],
        filteredCompletedOrder: [],
        loading: false
    },
    reducers: {
        setOrder: (state, action) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminGetOrderById.fulfilled, (state, action) => {
                state.data = action.payload;
               
            })  
            .addCase(adminUpdateOrder.fulfilled, (state, action) => {
                state.data = action.payload;
               
            })
            .addCase(adminUpdateOrder.pending, (state, action) => {
                state.loading = true;
               
            })
        
            .addCase(adminGetAllOrder.fulfilled, (state, action) => {
                state.data = action.payload
                state.filteredPendingOrder = action.payload.orders.filter(o => !o.status && !o.slip);
                state.filteredOnProccessOrder = action.payload.orders.filter(o => !o.status && o.slip);
                state.filteredCompletedOrder = action.payload.orders.filter(o => o.status && o.slip);
            })
    }
})
export const orderSelector = {
    selectOrder: (state) => state.order.data,
    selectPendingOrder : (state) => state.order.filteredPendingOrder,
    selectOnProcessOrder : (state) => state.order.filteredOnProccessOrder,
    selectCompleted : (state) => state.order.filteredCompletedOrder
}

export default orderSlice.reducer