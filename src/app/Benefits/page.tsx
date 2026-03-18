'use client'
import Image from "next/image";

const benefitsData = [
  {
    title:"Comodidad Total",
    image:"/comodidad.png",
    description:"Sin compras ni ingredientes faltantes."
  },
  {
    title:"Ahorra tiempo",
    image:"/tiempo.png",
    description:"Olvídate de cocinar diario, de la comida ultra procesada y de comer siempre lo mismo."
  },
  {
    title:"A tu medida",
    image:"/medida.png",
    description:"Menús adaptados a tus necesidades y gustos."
  },
  {
    title:"Calidad y sabor",
    image:"/sabor.png",
    description:"Comidas variadas con ingredientes frescos y listas para disfrutar."
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className=" bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900 mb-12">
            Beneficios de Power Meals
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-brand-light shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
              <div className="mb-4 relative w-full h-35 flex justify-center items-center">
                 <Image
                  src={benefit.image}
                  height={200}
                  width={200}
                  alt={benefit.title}
                  className="rounded-xl object-contain max-h-full"
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}