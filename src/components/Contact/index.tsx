import FacebookIcon from "./../../assets/facebookIcon.svg";
import InstagramIcon from "./../../assets/instagramIcon.svg";
import TwitterIcon from "./../../assets/twitterIcon.svg";
import LinkedinIcon from "./../../assets/linkedinIcon.svg";

export function Contact() {
  return (
    <div className="text-white flex flex-col gap-6">
      <h2 className="text-3xl ">Entrar em contato</h2>

      <p className="text-[18px]/9 italic">
        <strong>
          Podemos garantir confiabilidade, tarifas de baixo custo e o mais
          importante, com segurança e conforto em mente.
        </strong>
      </p>

      <p className="text-[18px]/9">
        Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora
        torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet
        convallis erat.
      </p>

      <div className="flex gap-6 mt-4">
        <img src={FacebookIcon} alt="Facebook Icon" className="h-10 w-10" />
        <img src={TwitterIcon} alt="Twitter Icon" className="h-10 w-10" />
        <img src={InstagramIcon} alt="Instagram Icon" className="h-10 w-10" />
        <img src={LinkedinIcon} alt="Linkedin Icon" className="h-10 w-10" />
      </div>
    </div>
  );
}
