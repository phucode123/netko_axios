'use client'
import { useEffect, useState } from "react";
import axios from "axios";
// import { api, useAxiosInterceptor } from "@/utils/axiosRequest";

export default function Home() {
  const [shoes, setShoes] = useState([{
    id: null,
    name: '',
    price: ''
  }]);
  const [shoes2, setShoes2] = useState([{
    id: null,
    name: '',
    price: ''
  }]);

  const [message, setMessage] = useState('Click on the button');

  const fetchShoes = async () => {
    try {
      const response = await axios.get('/api/products');
      setShoes(response.data.data);
    } catch (error) {
      console.error('Error fetching shoes:', error);
      setMessage('Failed to fetch shoes');
    }
  };
  const fetchShoes2 = async () => {
    try {
      const response = await axios.get('/api/products');
      setShoes2(response.data.data);
    } catch (error) {
      console.error('Error fetching shoes:', error);
      setMessage('Failed to fetch shoes');
    }
  };
  
  return (
    <div className="flex mx-auto justify-around items-center flex-row">
      {
          <div>
            {shoes.length > 0 && shoes[0].id != null ?
              (
                <div className="flex flex-row gap-6">
                  <div>
                    <ul>
                      {shoes.map((item, index) => {
                        return (
                          <li key={index} className="flex justify-between">
                            <strong>Name:</strong> {item.name}  - <strong>Price:</strong> {item.price}
                          </li>
                        )
                      })}
                    </ul>
                  </div>


                </div>
              )
              : <div>{message}</div>
            }
            <button className="bg-slate-400 p-3" onClick={fetchShoes}>GET SHOE</button>
          </div>
      }
      <div>
        <ul>
          {shoes2.length > 0 && shoes2[0].id != null ?
            shoes2.map((item, index) => {
              return (
                <li key={index} className="flex justify-between">
                  <strong>Name:</strong> {item.name}  - <strong>Giá:</strong> {item.price}
                </li>
              )
            })
            : <div>none</div>}
        </ul>
        <button className="bg-slate-400 p-3" onClick={fetchShoes2}>GET SHOE 2</button>
      </div>

    </div>
  );
}
