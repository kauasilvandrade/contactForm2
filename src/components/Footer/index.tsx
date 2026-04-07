export function Footer() {
  return (
    <footer className="bg-[#333333] w-full flex items-center justify-center">
      <div className="w-[340px] min-[575px]:w-[570px] flex flex-col gap-10 py-10 text-center text-white">
        <p className="text-sm/relaxed">
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          nullam nunc justo sagittis suscipit ultrices.
        </p>
        <p className="text-sm/relaxed">
          <a href="#" className="hover:underline">
            Website Templates{" "}
          </a>
          criado com
          <a href="#" className="hover:underline">
            {" "}
            Website Builder Software
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
