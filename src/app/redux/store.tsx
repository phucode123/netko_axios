import { configureStore } from "@reduxjs/toolkit";
import productsSlice, { DeleteProduct } from "./slices/productSlice";
// import userSlice from "./slices/userSlice"; // Nếu bạn cần slice này
import { useDispatch, useSelector } from "react-redux";
import { applyMiddleware } from "redux";

const customMiddleware = (store: any) => (next: any) => (action: any) => {
    // if (action.type === DeleteProduct.fulfilled.type) { // Kiểm tra nếu là hành động xoá
    //     const state = store.getState(); // Lấy state hiện tại
    //     const userId = state.user.id; // Giả sử bạn lưu trữ thông tin người dùng trong state.user

    //     const { id_author } = action.meta.arg; // Lấy id_author từ payload của action

    //     if (id_author !== userId) {
    //         alert("Không có quyền xoá todo này!");
    //         return; // Nếu không có quyền, dừng tại đây
    //     }
    // }

    // Tiếp tục xử lý nếu có quyền
    return next(action);
};
const store = configureStore({
    reducer: {
        product: productsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware)

});



export type AppDispatch = typeof store.dispatch;

// Tạo hook cho dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
