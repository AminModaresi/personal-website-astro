interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceItem = ({
  title,
  company,
  location,
  duration,
  responsibilities,
}: ExperienceItemProps) => {
  return (
    <div className="sm:pl-5">
      <div className="flex gap-10 justify-between items-end">
        <div className="flex flex-col gap-2">
          <h5 className="text-2xl md:text-4xl font-bold">{company}</h5>
          <p className="md:text-2xl text-neutral-500">{title}</p>
        </div>
        <div>
          <div className="text-neutral-400">{duration}</div>
          <div className="text-neutral-400">{location}</div>
        </div>
      </div>
      <div className="mt-4">
        <ul className="list-disc pl-5">
          {responsibilities.map(item => <li className="mb-4 text-base">
            {item}
          </li>)}
        </ul>
      </div>
    </div>
  );
};
export default ExperienceItem;
