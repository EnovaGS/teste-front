import Image from 'next/image';
import TurbinaEolicaImage from '../../../public/img/aa.jpg'; 

const TurbinaEolica = () => (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
        <Image src={TurbinaEolicaImage} alt="Turbinas eólicas" className="w-full h-64 object-cover" />
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-[#2E7D32] mb-4">Gestão de Turbinas Eólicas</h1>
            <p className="text-gray-700 mb-4">
                Sugestões de manutenção preventiva e alertas automáticos para garantir a eficiência das turbinas eólicas. O sistema oferece uma análise detalhada e envia alertas que ajudam a minimizar falhas inesperadas.
            </p>
            <p className="text-gray-700">
                Garantir a saúde das turbinas significa maior produção de energia e menor tempo de inatividade.
            </p>
        </div>
    </div>
);

export default TurbinaEolica;
