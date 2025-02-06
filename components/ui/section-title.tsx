const SectionTitle = ({title}:{title: string}) => {
  return (
    <div className="bg-primary-blue rounded-[10px] py-[15px] shadow-xl w-full">
      <p className="text-section-name text-white uppercase text-center">{title}</p>
    </div>
  );
};

export default SectionTitle;
