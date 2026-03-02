interface smallCardProps {
    logoUrl: string;
    name: string;
}

export const SmallCard = ({ logoUrl, name }: smallCardProps) => {
    return (
        <div className="flex gap-3 justify-center items-center p-5 border border-gray-500 rounded-lg shadow-xl h-20 w-45">
            <img src={logoUrl} alt={name} />
            <p>{name}</p>
        </div>
    );
};
