import Image from "next/image";
import Eolica from "../../../public/img/eolica.svg";
import Hidreletrica from "../../../public/img/hidreletrica.svg";
import Solar from '../../../public/img/solar.svg';

export default function FonteEnergia() {
  return (
    <section className="flex flex-col items-center my-12">
        <h2 className="mt-12 mb-5 text-[#101828] text-center font-bold text-3xl md:text-4xl lg:text-5xl">Fontes de energia renováveis</h2>
        <h3 className="mb-12 text-xs text-center text-[#475467] md:text-sm lg:text-base">Principais Tipos de Fontes de Energia Renováveis e O que são</h3>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:justify-evenly w-full">
            <div className="bg-[#3CAB90] bg-opacity-5 flex flex-col border-[#3CAB90] border-2 rounded-xl gap-4 p-4 w-11/12 md:w-6/12 lg:w-1/4">
                <Image src={Eolica} alt="Victor Henrique Estrella Carracci" className="w-8/12 rounded-lg"/>
                <h6 className="text-[#101828] font-semibold text-base lg:text-xl">Energia Eólica</h6>
                <p className="text-[#475467]">We are here to help you with solar panel installation in Devon and Cornwall. If we were to sum ourselves up in a few words, those would be reliable, honest and friendly. We find our customers agree! We are with you from the start of the project to the finish.</p>
            </div>

            <div className="bg-[#3CAB90] bg-opacity-5 flex flex-col border-[#3CAB90] border-2 rounded-xl gap-4 p-4 w-11/12 md:w-6/12 lg:w-1/4">
                <Image src={Solar} alt="Leticia Cristina dos Santos Passos" className="w-9/12 rounded-lg"/>
                <h6 className="text-[#101828] font-semibold text-base lg:text-xl">Energia Solar</h6>
                <p className="text-[#475467]">As I am sure you will have seen, solar systems do not tend to come cheap. Our aim is to make solar power accessible to everyone, so we price ourselves in a way that makes solar energy more affordable. We are focused on helping you and on helping </p>
            </div>

            <div className="bg-[#3CAB90] bg-opacity-5 flex flex-col border-[#3CAB90] border-2 rounded-xl gap-4 p-4 w-11/12 md:w-6/12 lg:w-1/4">
                <Image src={Hidreletrica} alt="André Rogério Vieira Pavanela Altobelli Antunes" className="w-9/12 rounded-lg"/>
                <h6 className="text-[#101828] font-semibold text-base lg:text-xl">Energia Hidrelétrica</h6>
                <p className="text-[#475467]">As we have said, we do this because we truly care about the planet and about seeing people embrace a greener, more eco-friendly approach to power. The world of green energy can be jargon-filled and opaque, so we want to help educate people on the big and</p>
            </div>

        </div>
        
    </section>
  )
}
