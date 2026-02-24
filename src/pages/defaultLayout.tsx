import { Navbar } from "@/components/navbar";
import { Outlet } from "react-router"

export const DefaultLayout = () => {
    return (
        <div className="h-screen w-screen">
            <Navbar />
            <div className="py-15 px-30">
                <Outlet />
            </div>
        </div>
    );
};
