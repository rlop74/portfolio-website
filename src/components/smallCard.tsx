interface smallCardProps {
    logoUrl: string;
    name: string;
}

export const SmallCard = ({ logoUrl, name }: smallCardProps) => {
    return (
        <div className="flex gap-3 items-center p-5 border border-gray-500 rounded-lg shadow-xl">
            <img src={logoUrl} alt={name} />
            <p>{name}</p>
        </div>
    )
}