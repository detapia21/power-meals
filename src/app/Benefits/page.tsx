'use client'

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-20">
    <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900 mb-6">
        Beneficios de Power Meals
    </h2>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full">
          <img
            src="/benefits.jpg"
            alt="Beneficios de Power Meals"
            className="object-cover rounded-2xl shadow-lg"
          />
          <p className="text-lg text-gray-600 leading-relaxed">
            <b>Comodidad Total:</b> Sin compras ni ingredientes faltantes.
          </p>
        </div>
        <div className="relative w-full ">
          <img
            src="/benefits.jpg"
            alt="Beneficios de Power Meals"
            className="object-cover rounded-2xl shadow-lg"
          />
          <p className="text-lg text-gray-600 leading-relaxed">
            <b>Ahorra tiempo:</b> Olvídate de cocinar diario, de la comida ultra procesada y de comer siempre lo mismo.
          </p>
        </div>
        <div className="relative w-full">
          <img
            src="/benefits.jpg"
            alt="Beneficios de Power Meals"
            className="object-cover rounded-2xl shadow-lg"
          />
          <p className="text-lg text-gray-600 leading-relaxed">
            <b>A tu medida:</b> Menús adaptados a tus necesidades y gustos.
          </p>
        </div>
        <div className="relative w-full">
          <img
            src="/benefits.jpg"
            alt="Beneficios de Power Meals"
            className="object-cover rounded-2xl shadow-lg"
          />
          <p className="text-lg text-gray-600 leading-relaxed">
            <b>Calidad y sabor:</b> Comidas variadas con ingredientes frescos y listas para disfrutar.
          </p>
        </div>
      </div>
    </section>
  );
}