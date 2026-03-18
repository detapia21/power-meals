'use client'
import { useState } from "react";

const MENU_DATA = {
  month: "Octubre",
  weeks: [
    {
      id: 1,
      title: "Semana 1",
      dates: "02 - 06 Oct",
      dishes: [
        { day: "Lunes", name: "Pollo al Pesto", description: "Pechuga de pollo con pasta integral y salsa pesto artesanal." },
        { day: "Martes", name: "Bowl Mexicano", description: "Quinoa, frijoles negros, maíz, aguacate y fajitas de res." },
        { day: "Miércoles", name: "Salmón al Horno", description: "Filete de salmón con costra de hierbas y espárragos." },
        { day: "Jueves", name: "Tacos de Lechuga", description: "Hojas de lechuga rellenas de pavo molido sazonado y vegetales." },
        { day: "Viernes", name: "Ensalada Griega", description: "Mezcla de verdes, queso feta, aceitunas y pollo a la plancha." },
      ]
    },
    {
      id: 2,
      title: "Semana 2",
      dates: "09 - 13 Oct",
      dishes: [
        { day: "Lunes", name: "Lasaña de Calabacín", description: "Láminas de calabacín con salsa boloñesa de pavo y queso ligero." },
        { day: "Martes", name: "Cerdo Agridulce", description: "Lomito de cerdo con piña, pimientos y arroz jazmín." },
        { day: "Miércoles", name: "Bowl de Garbanzos", description: "Garbanzos rostizados, hummus, pepino y aderezo de tahini." },
        { day: "Jueves", name: "Pescado a la Veracruzana", description: "Filete de pescado blanco con salsa de tomate, alcaparras y olivas." },
        { day: "Viernes", name: "Hamburguesa Fit", description: "Medallón de res magra en pan integral con camote al horno." },
      ]
    },
    {
      id: 3,
      title: "Semana 3",
      dates: "16 - 20 Oct",
      dishes: [
        { day: "Lunes", name: "Stir Fry de Pollo", description: "Pollo salteado con brócoli, zanahoria y salsa de soja baja en sodio." },
        { day: "Martes", name: "Pasta Primavera", description: "Pasta de lentejas con vegetales de temporada salteados." },
        { day: "Miércoles", name: "Albóndigas de Pavo", description: "Albóndigas caseras en salsa de tomate sobre puré de coliflor." },
        { day: "Jueves", name: "Bowl de Atún", description: "Atún fresco sellado con edamames, alga nori y arroz integral." },
        { day: "Viernes", name: "Quiche de Espinacas", description: "Porción de quiche artesanal con ensalada verde de acompañamiento." },
      ]
    }
  ],
  footer: "* El menú está sujeto a cambios según disponibilidad de ingredientes y temporada. Todos los platillos son preparados con ingredientes frescos y de alta calidad para garantizar sabor y nutrición en cada bocado."
};

export default function MenuSection() {
  // Estado para controlar qué semana se está visualizando
  const [activeWeekId, setActiveWeekId] = useState(MENU_DATA.weeks[0]?.id || 1);

  const activeWeek = MENU_DATA.weeks.find(w => w.id === activeWeekId);

  return (
    <section id="menu" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Menú de {MENU_DATA.month}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre los platillos equilibrados y deliciosos que hemos preparado para ti este mes.
          </p>
        </div>

        {/* Selector de Semanas */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {MENU_DATA.weeks.map((week) => (
            <button
              key={week.id}
              onClick={() => setActiveWeekId(week.id)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                activeWeekId === week.id
                  ? 'bg-green-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {week.title} <span className="block text-xs font-normal opacity-80">{week.dates}</span>
            </button>
          ))}
        </div>

        {/* Tarjetas de Platillos */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {activeWeek?.dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="mb-3">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {dish.day}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                {dish.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {dish.description}
              </p>
            </div>
          ))}
        </div>

        {/* Nota al pie */}
        <div className="mt-12 text-center border-t border-gray-100 pt-8">
          <p className="text-sm text-gray-500 italic">
            {MENU_DATA.footer}
          </p>
        </div>
      </div>
    </section>
  );
}