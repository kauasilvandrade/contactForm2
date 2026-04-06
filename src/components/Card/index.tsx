type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function Card({ icon, title, description }: Props) {
  return (
    <div className="h-72 bg-white border-none rounded-2xl flex items-center flex-col p-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
      {icon}
      <h2 className="uppercase w-30 text-center text-xl/6 font-bold my-4">
        {title}
      </h2>
      <p className="text-base text-center w-50">{description}</p>
    </div>
  );
}
