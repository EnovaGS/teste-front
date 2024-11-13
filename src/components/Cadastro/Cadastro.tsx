import Image from "next/image"
import CasaSustentavel from "../../../public/img/imagem-login-cadastro.svg"

export default function Cadastro() {
    return (
        <section className="flex flex-col-reverse lg:flex-row justify-center items-center gap-24 md:flex-col min-h-screen bg-[#E0E0E0]">
            <div className="md:w-1/2 lg:inline-block lg:w-auto hidden">
                <Image src={CasaSustentavel} alt="Imagem de um cara sustentável"/>
            </div>
            <form className="w-10/12 lg:w-4/12 flex flex-col bg-white p-6 rounded-2xl">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#101828] text-center mb-12">Cadastro</h3>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nome" className="text-black font-semibold">Nome completo:</label>
                        <input type="text" id="nome" name="nome" placeholder="Nome Completo" required className="w-full border border-gray-400 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-black font-semibold">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Email" required className="w-full border border-gray-400 rounded-md p-2" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="senha" className="text-black font-semibold">Senha:</label>
                        <input type="password" id="senha" name="senha" placeholder="Senha" required className="w-full border border-gray-400 rounded-md p-2" />
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button type="submit" className="text-white py-2 px-4 rounded-xl text-xl bg-green-500">Cadastrar</button>
                </div>
                <p className="text-center mt-6 text-[#313131] font-semibold">Já possui uma conta?<a href="/login" className="text-black"> Faça Login</a></p>

            </form>
    </section>
    )
}
