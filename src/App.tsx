import { Card } from "./components/Card";

import { Header } from "./components/Header";
import { Form } from "./components/Form";
import CardsBox from "./components/CardsBox";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <div>
      <Header />

      <div className="h-60"></div>

      <main className="bg-gradient-to-r from-[#d71060] to-[#242c99]">
        <div className="w-[340px] m-auto">
          <CardsBox />

          <Form />

          <Contact />
        </div>
      </main>
    </div>
  );
}
