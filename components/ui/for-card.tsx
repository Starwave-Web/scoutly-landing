import { ReactElement } from "react";

const ForCard = ({
    title,
    description,
    icon,
  }: {
    title: string;
    description: string;
    icon: ReactElement
  }) => {
  return (
    <div className="rounded-[40px] shadow-lg px-8 py-9 relative w-auto max-w-[300px] min-[1420px]:max-w-[349px] h-[284px] flex items-center">
        <div className="max-w-3/4 flex flex-col items-start">
            <h4 className="text-for-card-title text-primary-blue uppercase">{title}</h4>
            <p className="text-for-card-description text-secondary-blue">{description}</p>
        </div>
        <div className="absolute bottom-6 right-6">{icon}</div>
    </div>
  )
}

export default ForCard