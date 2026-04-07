type Props = React.ComponentProps<"textarea"> & {
  label: string;
  placeholder: string;
};

export function Textarea({ label, placeholder, ...rest }: Props) {
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
        className="text-base text-white p-4 border-b-2 border-white outline-none placeholder:text-gray-400"
      ></textarea>
    </div>
  );
}
