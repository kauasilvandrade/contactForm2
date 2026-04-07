import { Card } from "./components/Card";

import { Header } from "./components/Header";
import { Form } from "./components/Form";
import CardsBox from "./components/CardsBox";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div>
      <Header />

      <div className="h-60"></div>

      <main className="bg-gradient-to-r from-[#d71060] to-[#242c99] pb-20">
        <div className="w-[340px] min-[575px]:w-[570px] sm:w-[635px] md:w-[760px] lg:w-[1020px] xl:w-[1280px]  m-auto relative">
          <CardsBox />

          <div className="md:flex xl:gap-20 justify-between gap-10">
            <Form />

            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
