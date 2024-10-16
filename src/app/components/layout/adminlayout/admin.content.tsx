'use client'

export default function AdminContent({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="mt-10">
            {children}
        </div>
    )
}