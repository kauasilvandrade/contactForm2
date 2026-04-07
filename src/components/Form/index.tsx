import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Textarea } from "./components/Textarea";

export function Form() {
  return (
    <form className="pt-[900px] pb-16 min-[575px]:pt-[450px] sm:flex-1 lg:pt-[200px]">
      <Input
        label="Email"
        type="email"
        placeholder="Enter a valid email address"
      />
      <Input label="Name" placeholder="Enter your Name" />
      <Textarea label="Message" placeholder="Enter your message" />
      <Button />
    </form>
  );
}
