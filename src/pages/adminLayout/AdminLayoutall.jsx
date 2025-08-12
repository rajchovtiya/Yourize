import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}


            {/* Main Content */}
            <main className="flex-1 bg-gray-100 p-6">
                <Outlet />
            </main>
        </div>
    );
}
