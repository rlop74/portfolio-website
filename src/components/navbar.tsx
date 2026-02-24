import { NavLink } from "react-router";

export const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center px-20 py-5 border-b border-gray-600">
                <div className="text-4xl">💻 ☕️</div>
                <div className="flex gap-7 ">
                    <NavLink to="/" className="cursor-pointer">Home</NavLink>
                    <NavLink to="/experience" className="cursor-pointer">Experience</NavLink>
                    <NavLink to="/projects" className="cursor-pointer">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
        </>
    );
};
