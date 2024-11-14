import Image from 'next/image';
import ManutencaoImage from '../../../public/img/aaa.jpg';

const Manutencao = () => (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
        <Image src={ManutencaoImage} alt="Manutenção preventiva" className="w-full h-64 object-cover" />
        <div className="p-6">
            <h1 className="text-3xl font-semibold text-[#2E7D32] mb-4">Sistema de Manutenção Preventiva</h1>
            <p className="text-gray-700 mb-4">
                Emissão de alertas automáticos e acesso ao histórico de manutenção para reduzir paradas inesperadas e prolongar a vida útil dos equipamentos. Este sistema ajuda a prever quando o equipamento pode precisar de atenção.
            </p>
            <p className="text-gray-700">
                Com esse sistema, é possível reduzir custos operacionais e garantir a continuidade do funcionamento dos equipamentos.
            </p>
        </div>
    </div>
);

export default Manutencao;
