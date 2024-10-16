'use client'

import Link from "next/link";

export default function HeaderAdmin() {
    console.log("Header is rendering");
    return (
        <div className="fixed left-0 right-0 top-0 z-10">
            <ul className="flex gap-5 bg-slate-400 px-4">
                <Link href={'/admin/manageProduct'} className=" focus:bg-slate-600 focus:text-white py-2 w-16 text-center">Product</Link>
                <Link href={'/admin/manageUser'} className=" focus:bg-slate-600 focus:text-white py-2 w-16 text-center">User</Link>
                <Link href={'#'} className=" focus:bg-slate-600 focus:text-white py-2 w-16 text-center">Other</Link>
            </ul>
        </div>
    )
}