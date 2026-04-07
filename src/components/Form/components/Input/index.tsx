type Props = React.ComponentProps<"input"> & {
  type?: string;
  label: string;
  placeholder: string;
  name: string;
  register: any;
  error?: any;
};

export function Input({
  type = "text",
  label,
  placeholder,
  register,
  error,
  name,
  ...rest
}: Props) {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={name} className="text-white font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={name}
        {...register(name)}
        {...rest}
        placeholder={placeholder}
        className="text-base text-white p-4 border-b-2 border-white outline-none placeholder:text-gray-400
        focus-within:border-[#900e42]"
      />

      {error && (
        <span className="text-red-950 text-base mt-4">{error.message}</span>
      )}
    </div>
  );
}
