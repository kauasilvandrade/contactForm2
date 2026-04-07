import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Textarea } from "./components/Textarea";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  email: string;
  name: string;
  message: string;
};

const schema = yup.object({
  name: yup
    .string()
    .required("Primeiro nome é obrigatório")
    .min(3, "Precisa ter pelo menos 3 caracteres"),

  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Email precisa ser válido"),

  message: yup
    .string()
    .required("Mensagem obrigatória")
    .min(10, "Precisa ter pelo menos 10 caracteres"),
});

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  function onSubmit(data: FormData) {
    console.log(data);
    reset();
  }

  return (
    <form
      className="pt-[900px] pb-16 min-[575px]:pt-[450px] sm:flex-1 lg:pt-[200px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter a valid email address"
        register={register}
        error={errors.email}
      />
      <Input
        label="Name"
        name="name"
        placeholder="Enter your Name"
        register={register}
        error={errors.name}
      />
      <Textarea
        label="Message"
        name="message"
        placeholder="Enter your message"
        register={register}
        error={errors.message}
      />
      <Button />
    </form>
  );
}
