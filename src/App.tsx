import { Card } from "./components/Card";

import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Speech } from "lucide-react";
import { Mail } from "lucide-react";
import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <Header />
      {/* <Card
        icon={<MapPin size={70} strokeWidth={1} color="#742499" />}
        title="Nosso escritório principal"
        description="SoHo 94 Broadway St New York, NY 1001"
      />

      <Card
        icon={<Phone size={70} strokeWidth={1} color="#742499" />}
        title="Número de telefone"
        description="234-9876-5400 888-0123-4567 (ligação gratuita)"
      />

      <Card
        icon={<Speech size={70} strokeWidth={1} color="#742499" />}
        title="fax"
        description="1-234-567-8900"
      />

      <Card
        icon={<Mail size={70} strokeWidth={1} color="#742499" />}
        title="E-mail"
        description="hello@theme.com"
      /> */}
    </div>
  );
}
