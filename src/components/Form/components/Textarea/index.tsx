type Props = React.ComponentProps<"textarea"> & {
  label: string;
  placeholder: string;
  name: string;
  register: any;
  error?: any;
};

export function Textarea({
  label,
  placeholder,
  name,
  register,
  error,
  ...rest
}: Props) {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={label} className="text-white font-semibold">
        {label}
      </label>
      <textarea
        rows={5}
        id={label}
        placeholder={placeholder}
        {...rest}
        {...register(name)}
        className="text-base text-white p-4 border-b-2 border-white outline-none placeholder:text-gray-400 focus-within:border-[#900e42] resize-none"
      ></textarea>
      {error && (
        <span className="text-red-950 text-base mt-4">{error.message}</span>
      )}
    </div>
  );
}
