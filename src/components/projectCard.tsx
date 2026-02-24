interface ProjectCardProps {
    name: string;
    stack: string[];
    dateStarted: string;
    description: string[];
}

export const ProjectCard = ({
    name,
    stack,
    dateStarted,
    description,
}: ProjectCardProps) => {
    return (
        <div className="border border-gray-500 p-10 rounded-xl">
            <div className="grid grid-cols-2">
                <div>
                    <h2 className="text-4xl font-bold">{name}</h2>
                    <p>{dateStarted}</p>
                    {stack.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </div>
                <ul className="border border-gray-700 rounded-xl p-5 list-disc pl-15">
                    {description.map((item: string) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
