import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Textarea } from "./components/Textarea";

export function Form() {
  return (
    <form className="pb-16">
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
