interface ExperienceProps {
    title: string;
    company: string;
    date: string;
    description: string[];
}

export const ExperienceCard = ({
    title,
    company,
    date,
    description,
}: ExperienceProps) => {
    return (
        <div className="border border-gray-500 p-10 rounded-xl">
            <div className="grid grid-cols-2">
                <div>
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <h3 className="text-2xl">{company}</h3>
                    <p>{date}</p>
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
