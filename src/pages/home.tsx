import { SmallCard } from "@/components/smallCard";
import reactLogo from "@/assets/react.svg";

export const Home = () => {
    return (
        <div className="space-y-10">
            <div className="flex justify-center items-center gap-15">
                <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQGy1OWBIfOy2A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691031045223?e=1773273600&v=beta&t=btQ3RyoOgeXtC1bTI9sPs3RrKCPlRuSjjNWAqTXnDBg"
                    className="h-60 w-60 rounded-full"
                />
                <div className="space-y-7 text-center">
                    <p className="text-5xl font-extrabold">Russel Lopez</p>
                    <p className="text-2xl font-bold">Full Stack Developer</p>
                </div>
            </div>
            <div className="text-center">Description</div>

            {/* tech stack */}
            <div className="grid grid-cols-5 gap-5 px-50">
                <SmallCard logoUrl={reactLogo} name="React" />
                <SmallCard logoUrl={reactLogo} name="React" />
                <SmallCard logoUrl={reactLogo} name="React" />
                <SmallCard logoUrl={reactLogo} name="React" />
                <SmallCard logoUrl={reactLogo} name="React" />
                <SmallCard logoUrl={reactLogo} name="React" />
                <SmallCard logoUrl={reactLogo} name="React" />
            </div>
        </div>
    );
};
