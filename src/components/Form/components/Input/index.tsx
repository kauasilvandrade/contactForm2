type Props = React.ComponentProps<"input"> & {
  type?: string;
  label: string;
  placeholder: string;
};

export function Input({ type = "text", label, placeholder, ...rest }: Props) {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={label} className="text-white font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={label}
        {...rest}
        placeholder={placeholder}
        className="text-base text-white p-4 border-b-2 border-white outline-none placeholder:text-gray-400
        focus-within:border-[#900e42]"
      />
    </div>
  );
}
