import { NextResponse } from "next/server"
import axios from "axios";


export async function GET() {
    const res = await axios.get('https://ttcs-delta.vercel.app/api/v1/get-shoes', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log('call');
    const data = res.data.data;
    const response = NextResponse.json({ data });
    response.headers.append('Cache-Control', 's-maxage=30, stale-while-revalidate=59'); // Thiết lập cache
    return response;
}
export async function getStaticProps() {
    const res = await axios.get('https://ttcs-delta.vercel.app/api/v1/get-shoes');
    const data = res.data.data;

    return {
        props: {
            shoes: data,
        },
        revalidate: 30,
    };
}

export async function POST(data: object) {

}