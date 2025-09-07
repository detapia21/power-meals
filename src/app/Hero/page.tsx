import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gray-50">
       <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">
        <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span className="text-brand-green">Power Meals</span> <br />
                llegó para hacerte la vida más fácil.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
                Te ofrecemos comidas saludables, balanceadas y listas para disfrutar sin complicarte.
                Si buscas comer mejor y ahorrar tiempo, <b>Power Meals</b> es para ti.<br/>
            </p>
            <ul>
                <li>* Listo para comer.</li>
                <li>* Sabor casero.</li>
                <li>* Nutrición sin complicaciones.</li>
            </ul>
            <div className="mt-8 flex gap-4">
            <Link
              href="#plans"
              className="bg-brand-green text-white px-6 py-3 rounded-lg shadow-md hover:bg-brand-dark transition"
            >
              Ver Planes
            </Link>
            <Link
              href="#contact"
              className="border border-brand-green text-brand-green px-6 py-3 rounded-lg hover:bg-brand-green hover:text-white transition"
            >
              Contáctanos
            </Link>
          </div>
        </div>

        <div className="relative w-full h-80 md:h-96">
          <Image
            src="/logo.jpg"
            alt="Meal Prep saludable"
            fill
            className="object-cover rounded-2xl shadow-lg"
            priority
          />
        </div>
      </div> 
    </section>
  );
}