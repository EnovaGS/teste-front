export default function Avaliacao() {
    return (
        <section className="flex flex-col items-center min-h-screen justify-center">
            <h2 className="mt-12 mb-5 text-[#101828] font-semibold text-3xl md:text-4xl lg:text-5xl">Avalie-nos</h2>
            <h3 className="mb-12 text-xs text-center text-[#475467] md:text-sm lg:text-base lg:w-1/2">Quer avaliar nossos serviços ou compartilhar sua opinião sobre a ENOVA? Sua experiência é fundamental para nós! Preencha o formulário abaixo e nos ajude a aprimorar nossas soluções de energia verde, construindo um futuro mais sustentável.</h3>
            <form className="space-y-4 mb-8 p-4 bg-[#72DB9A] rounded-2xl">
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1">
                        <input type="text" id="nome" name="nome" placeholder="Nome:" required className="w-full border border-gray-300 rounded-md p-2" />
                    </div>
                    <div className="flex-1 mt-2 md:mt-0">
                        <input type="email" id="email" name="email" placeholder="Email:" required className="w-full border border-gray-300 rounded-md p-2" />
                    </div>
                </div>
                <div>
                    <input type="number" id="avaliacao" name="avaliacao" placeholder="Avaliação:" required className="w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                    <textarea name="mensagem" id="mensagem" placeholder="Mensagem:" className="w-full border border-gray-300 rounded-md p-2" cols={30} rows={5} required></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="text-black py-1 px-6 rounded-xl bg-white">Enviar</button>
                </div>
            </form>
        </section>
    )
}
