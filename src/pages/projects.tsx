/*
 | 
January 2026

Built and deployed a full stack React Native mobile app that manages food items in their fridge preventing food waste by over 50%
Reducing asking/having to check fridge by 40%
Reducing buying duplicate items by 70%
Eliminated manual food inventory tracking by implementing Gemini 2.5 Flash Lite OCR to extract structured item data from receipt images and automatically store it in PostgreSQL, reducing item entry time by ~70%
Uses OpenAI’s API to use personal fridge data and suggest recipes, result not eating out and save money
Coded a REST API with Node.js to get, add, modify, and delete data from the database using Sequelize ORM
Ledgerly – Budget Tracker app | React, JavaScript, Vite, Tailwind, Lucide-React, NodeJS, ExpressJS, RechartsJS, Supabase, Material-UI, Zustand
November 2025

Built and deployed a full stack web application that helps users manage their income, expenses and savings preventing overspending by over 20%
Developed responsive financial dashboards using Recharts.js, allowing users to clearly analyze and track expenses, income, and savings over time
Designed and implemented a RESTful API using Node.js and Express to handle CRUD operations with Supabase PostgreSQL, enabling consistent and scalable data synchronization between frontend and backend
Implemented Supabase Authentication to securely manage user identity and sessions, enforcing access control and protecting user-specific application data
Implemented global state management using Zustand to efficiently manage application state and ensure consistent data flow across React components
*/

import { ProjectCard } from "@/components/projectCard";

export const Projects = () => {
    return (
        <div className="">
            <h1>Projects</h1>
            <div className="space-y-15 p-7">
                <ProjectCard
                    name="Fridgely – Digital Fridge app"
                    stack={[
                        "React Native",
                        "TypeScript",
                        "Expo",
                        "Express",
                        "Postgres",
                        "Docker",
                        "Sequelize ORM",
                        "Gemini 2.5 Flash Lite",
                    ]}
                    dateStarted="January 2026"
                    description={[
                        "Description 1",
                        "Description 2",
                        "Description 3",
                        "Description 4",
                    ]}
                />
                <ProjectCard
                    name="Fridgely – Digital Fridge app"
                    stack={[
                        "React Native",
                        "TypeScript",
                        "Expo",
                        "Express",
                        "Postgres",
                        "Docker",
                        "Sequelize ORM",
                        "Gemini 2.5 Flash Lite",
                    ]}
                    dateStarted="January 2026"
                    description={[
                        "Description 1",
                        "Description 2",
                        "Description 3",
                        "Description 4",
                    ]}
                />
            </div>
        </div>
    );
};
