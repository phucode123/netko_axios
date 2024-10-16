export default function ManageUserPage() {
    return (
        <div className="bg-green-100 p-4">
            <h1 className="text-lg font-bold mb-4">Quản lý người dùng</h1>
            <table className="min-w-full border-collapse border border-green-600">
                <thead>
                    <tr>
                        <th className="border border-green-500 px-4 py-2">User ID</th>
                        <th className="border border-green-500 px-4 py-2">Name</th>
                        <th className="border border-green-500 px-4 py-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-green-500 px-4 py-2">1</td>
                        <td className="border border-green-500 px-4 py-2">Alice</td>
                        <td className="border border-green-500 px-4 py-2">alice@example.com</td>
                    </tr>
                    <tr>
                        <td className="border border-green-500 px-4 py-2">2</td>
                        <td className="border border-green-500 px-4 py-2">Bob</td>
                        <td className="border border-green-500 px-4 py-2">bob@example.com</td>
                    </tr>
                    <tr>
                        <td className="border border-green-500 px-4 py-2">3</td>
                        <td className="border border-green-500 px-4 py-2">Charlie</td>
                        <td className="border border-green-500 px-4 py-2">charlie@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
