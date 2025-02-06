import { CheckMarkIcon } from "../icons";

const AboutUsCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center gap-1 rounded-[10px] shadow-lg px-5 py-6 w-full bg-white">
        <CheckMarkIcon className="min-w-10 self-start" />
      <div className="flex flex-col items-start">
        <h4 className="text-primary-blue text-about-card-title uppercase">{title}</h4>
        <p className="text-primary-grey text-about-card-description">{description}</p>
      </div>
    </div>
  );
};

export default AboutUsCard;
