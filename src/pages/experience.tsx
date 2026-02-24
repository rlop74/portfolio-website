import { ExperienceCard } from "@/components/experienceCard";

export const Experience = () => {
    return (
        <div className="">
            <h1>Experience</h1>
            <div className="space-y-15 p-7">
                <ExperienceCard
                    title="Full Stack Developer"
                    company="LetPhil"
                    date="August 2025 - Current"
                    description={[
                        "Experience 1",
                        "Experience 2",
                        "Experience 3",
                        "Experience 4",
                    ]}
                />
                <ExperienceCard
                    title="Web Developer"
                    company="Seoulected"
                    date="December 2025 - March 2026"
                    description={[
                        "Experience 1",
                        "Experience 2",
                        "Experience 3",
                        "Experience 4",
                    ]}
                />
            </div>
        </div>
    );
};
