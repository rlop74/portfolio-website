import { SmallCard } from "@/components/smallCard";
import { backendStack } from "@/constants/backendStack";
import { devopsStack } from "@/constants/devopsStack";
import { frontendStack } from "@/constants/frontendStack";
import {
    programmingLanguages,
} from "@/constants/programmingLanguages";
import { selfDescription } from "@/constants/selfDescription";

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
            <p className="whitespace-pre-wrap">{selfDescription}</p>

            {/* programming languages */}
            <h2 className="text-3xl font-bold">Languages</h2>
            <div className={`flex gap-5 px-20`}>
                {programmingLanguages.map((item) => (
                    <div key={item.name}>
                        <SmallCard name={item.name} logoUrl={item.logoUrl} />
                    </div>
                ))}
            </div>

            {/* front end */}
            <h2 className="text-3xl font-bold">Frontend</h2>
            <div className={`flex gap-5 px-20`}>
                {frontendStack.map((item) => (
                    <div key={item.name}>
                        <SmallCard name={item.name} logoUrl={item.logoUrl} />
                    </div>
                ))}
            </div>

            {/* back end */}
            <h2 className="text-3xl font-bold">Backend</h2>
            <div className={`flex gap-5 px-20`}>
                {backendStack.map((item) => (
                    <div key={item.name}>
                        <SmallCard name={item.name} logoUrl={item.logoUrl} />
                    </div>
                ))}
            </div>

            {/* devops */}
            <h2 className="text-3xl font-bold">DevOps</h2>
            <div className={`flex gap-5 px-20`}>
                {devopsStack.map((item) => (
                    <div key={item.name}>
                        <SmallCard name={item.name} logoUrl={item.logoUrl} />
                    </div>
                ))}
            </div>
        </div>
    );
};
