import { createBrowserRouter } from "react-router";

// pages
import { DefaultLayout } from "@/pages/defaultLayout";
import { Home } from "@/pages/home";
import { Experience } from "@/pages/experience";
import { Projects } from "@/pages/projects";
import { Contact } from "@/pages/contact";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: DefaultLayout,
        children: [
            { index: true, Component: Home },
            { path: "experience", Component: Experience },
            { path: "projects", Component: Projects},
            { path: "contact", Component: Contact}
        ],
    },
]);
