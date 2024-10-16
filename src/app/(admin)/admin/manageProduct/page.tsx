export default function ManageProduct()
{
    return (
        <div className="bg-red-100 p-4">
            <h1 className="text-lg font-bold mb-4">Quản lý sản phẩm</h1>
            <table className="min-w-full border-collapse border border-green-600">
                <thead>
                    <tr>
                        <th className="border border-green-500 px-4 py-2">ID</th>
                        <th className="border border-green-500 px-4 py-2">Name</th>
                        <th className="border border-green-500 px-4 py-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-green-500 px-4 py-2">1</td>
                        <td className="border border-green-500 px-4 py-2">Pen</td>
                        <td className="border border-green-500 px-4 py-2">100.000đ</td>
                    </tr>
                    <tr>
                        <td className="border border-green-500 px-4 py-2">2</td>
                        <td className="border border-green-500 px-4 py-2">Pencil</td>
                        <td className="border border-green-500 px-4 py-2">100.000đ</td>
                    </tr>
                    <tr>
                        <td className="border border-green-500 px-4 py-2">3</td>
                        <td className="border border-green-500 px-4 py-2">Handbook</td>
                        <td className="border border-green-500 px-4 py-2">100.000đ</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}