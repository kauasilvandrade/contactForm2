import { Card } from "./components/Card";

import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Speech } from "lucide-react";
import { Mail } from "lucide-react";

export function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card
        icon={<MapPin size={70} strokeWidth={1} color="#EE1C6F" />}
        title="Nosso escritório principal"
        description="SoHo 94 Broadway St New York, NY 1001"
      />

      <Card
        icon={<Phone size={70} strokeWidth={1} color="#EE1C6F" />}
        title="Número de telefone"
        description="234-9876-5400 888-0123-4567 (ligação gratuita)"
      />

      <Card
        icon={<Speech size={70} strokeWidth={1} color="#EE1C6F" />}
        title="fax"
        description="1-234-567-8900"
      />

      <Card
        icon={<Mail size={70} strokeWidth={1} color="#EE1C6F" />}
        title="E-mail"
        description="hello@theme.com"
      />
    </div>
  );
}
