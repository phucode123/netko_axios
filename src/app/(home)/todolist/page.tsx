'use client'
import { api } from "@/utils/axiosRequest";
import { getToDos, addToDo } from "@/utils/methodAPI";
import { useAppDispatch } from "@/app/redux/store";
import { useEffect, useState } from "react";
import { addProductToList, DeleteProduct, fetchAllProduct } from "@/app/redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

interface Todo {
    id: number;
    content: string;
    id_author: number
}
export default function HomePage() {
    const [content, setContent] = useState('')
    const dispatch = useAppDispatch();
    const listProduct = useSelector((state: any) => state.product.listProducts);

    useEffect(() => {
        dispatch(fetchAllProduct());
    }, [dispatch]);


    async function addTD() {
        if (content.trim()) {
            const newToDo =
            {
                id: Math.floor(Math.random() * 1000000),
                content: content,
                id_author: 1
            };
            dispatch(addProductToList(newToDo))
            setContent('');
        }
    }

    async function delTD(idTD: number, idAthor: number) {
        console.log(idTD);
        dispatch(DeleteProduct(idTD))
    }
    return (
        <div className="flex flex-col mx-auto text-end items-center">
            <header>
                <ul className="flex flex-row p-2 bg-slate-300 gap-2 items-center">
                    <li><input className="px-2 py-1" type="text" onChange={(e) => setContent(e.target.value)} value={content}></input><button className="ml-2 bg-green-200 px-2 py-1" onClick={addTD}>Add</button></li>
                    <li>Phu</li>
                    <li><button>Logout</button></li>
                </ul>
            </header>
            <div className="content">
                {listProduct?.map((todo: Todo, index: number) => (
                    <div key={index} className="todo-item flex flex-row gap-2 items-center">
                        <p><strong>{todo.id}</strong>: {todo.content}</p><button className="text-red-500 cursor-pointer p-1" onClick={() => { delTD(todo.id, todo.id_author) }}>delete</button>
                    </div>
                ))}
            </div>
            <footer>

            </footer>
        </div>
    )
}