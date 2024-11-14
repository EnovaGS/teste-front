import Image from 'next/image';
import PainelSolarImage from '../../../public/img/a.jpg';

const PainelSolar = () => (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
        <Image src={PainelSolarImage} alt="Painéis solares" className="w-full h-64 object-cover" />
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-[#2E7D32] mb-4">Monitoramento de Painéis Solares</h1>
            <p className="text-gray-700 mb-4">
                Análise detalhada e relatórios para otimizar a performance e reduzir custos dos painéis solares. Este sistema oferece uma visão completa do desempenho, com métricas atualizadas e sugestões de melhoria.
            </p>
            <p className="text-gray-700">
                Com o monitoramento contínuo, é possível prever problemas antes que se tornem graves e maximizar a eficiência energética.
            </p>
        </div>
    </div>
);

export default PainelSolar;
