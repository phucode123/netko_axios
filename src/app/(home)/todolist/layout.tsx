'use client'
import store from "@/app/redux/store";
import { Provider } from "react-redux";


export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <Provider store={store}>
                <body>
                    {children}
                </body>
            </Provider>
        </html>
    );
}