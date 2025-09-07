'use client'
import Image from "next/image";

export default function Benefits() {
  return (
    <section id="benefits" className=" bg-gray-50 py-20">
    <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900 mb-6">
        Beneficios de Power Meals
    </h2>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
       <div className="bg-brand-light shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="/platillo.jpg"
            height={200}
            width={200}
            alt="Beneficios de Power Meals"
            className="mx-auto rounded-2xl shadow-lg m-5"
          />
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            <b>Comodidad Total:</b> Sin compras ni ingredientes faltantes.
          </p>
        </div>
       <div className="bg-brand-light shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="/platillo.jpg"
            width={200}
            height={200}
            alt="Beneficios de Power Meals"
            className="mx-auto rounded-2xl shadow-lg m-5"
          />
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            <b>Ahorra tiempo:</b> Olvídate de cocinar diario, de la comida ultra procesada y de comer siempre lo mismo.
          </p>
        </div>
       <div className="bg-brand-light shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="/platillo.jpg"
            width={200}
            height={200}
            alt="Beneficios de Power Meals"
            className="mx-auto rounded-2xl shadow-lg m-5"
          />
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            <b>A tu medida:</b> Menús adaptados a tus necesidades y gustos.
          </p>
        </div>
       <div className="bg-brand-light shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
          <Image
            src="/platillo.jpg"
            width={200}
            height={200}
            alt="Beneficios de Power Meals"
            className="mx-auto rounded-2xl shadow-lg m-5"
          />
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            <b>Calidad y sabor:</b> Comidas variadas con ingredientes frescos y listas para disfrutar.
          </p>
        </div>
      </div>
    </section>
  );
}