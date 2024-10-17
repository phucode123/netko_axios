'use client'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "@/utils/axiosRequest";

interface Product {
    id: number
    content: string; 
    id_author: number; 
}

export const fetchAllProduct = createAsyncThunk(
    'products/fetchAll',
    async () => {
        const response = await api.get('/todolist');
        console.log(response);
        return response.data
    }
)

export const addProductToList = createAsyncThunk(
    'products/addProduct',
    async (data: object) => {
        const response = await api.post('/todolist', data);
        console.log(response);
        return response.data
    }
)

export const DeleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (id:number) => {
        console.log();
        const response = await api.delete(`/todolist/${id}`);
        console.log(response);
        return response.data
    }
)

const initialState = {
    listProducts: [] as Product[],
}

export const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProduct.pending, (state, action) => {
                console.log("Đang lấy dữ liệu");
            })
            .addCase(fetchAllProduct.fulfilled, (state, action) => {
                console.log("Láy thành công " + action.payload);
                state.listProducts = action.payload;
            })
            .addCase(fetchAllProduct.rejected, (state, action) => {
                console.log("Lỗi lấy dữ liệu");
            })
            .addCase(addProductToList.pending, (state, action) => {
                console.log("Đang thêm");
            })
            .addCase(addProductToList.fulfilled, (state, action) => {
                console.log("Thêm thành công");
                state.listProducts = [...state.listProducts, action.payload];
            })
            .addCase(addProductToList.rejected, (state, action) => {
                console.log("Lỗi thêm dữ liệu");
            })
            .addCase(DeleteProduct.pending, (state) => {
                console.log("Đang xóa sản phẩm");
            })
            .addCase(DeleteProduct.fulfilled, (state, action) => {
                console.log("Xóa thành công");
                state.listProducts = state.listProducts.filter((product) => product.id !== action.meta.arg); 
            })
            .addCase(DeleteProduct.rejected, (state) => {
                console.log("Lỗi khi xóa sản phẩm");
            })
    }
})

export default productsSlice.reducer