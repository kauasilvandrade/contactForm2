type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function Card({ icon, title, description }: Props) {
  return (
    <div className="bg-white border-none rounded-2xl flex items-center flex-col p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)] min-[575px]:w-68 min-[575px]:py-10 sm:w-75 md:w-92 lg:w-59 xl:w-[300px] ">
      {icon}
      <h2 className="uppercase text-center text-xl/6 font-bold my-4">
        {title}
      </h2>
      <p className="text-base text-center">{description}</p>
    </div>
  );
}
