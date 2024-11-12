import Image from "next/image"
import Logo from "../../../public/img/logo.svg"

export default function Footer() {
    return (
      <footer className="flex flex-col items-center py-10 bg-[#1A2B41]">
            <div className="flex items-center lg:space-x-3">
                <Image src={Logo} alt="Logo da Enova"/>
                <h1 className="text-white font-bold text-4xl">Enova</h1>
            </div>
            <div>
                <ul className="flex justify-center items-center  space-x-4 lg:space-x-8">
                    <li><a href="#" className="text-white hover:text-gray-400 outline-none text-base lg:text-lg">About</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400 outline-none text-base lg:text-lg">Carrers</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400 outline-none text-base lg:text-lg">Press</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400 outline-none text-base lg:text-lg">Customer Care</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400 outline-none text-base lg:text-lg">Services</a></li>
                </ul>
            </div>
            <div>
                <ul className="flex justify-between gap-0 items-center">
                    <li className="mr-4"><a href="" className="text-white hover:text-gray-400 outline-none text-base lg:text-lg opacity-45 ">Terms & Conditions </a></li>
                    <li className="mr-4"><a href="" className="text-white hover:text-gray-400 outline-none text-base lg:text-lg opacity-45">Privacy Policy |</a></li>
                    <li className="mr-4"><a href="" className="text-white hover:text-gray-400 outline-none text-base lg:text-lg opacity-45">Accessibility |</a></li>
                    <li className="mr-4"><a href="" className="text-white hover:text-gray-400 outline-none text-base lg:text-lg opacity-45">Legal |</a></li>
                </ul>
            </div>
      </footer>
    )
  } 