import Image from "next/image";

export default function AboutUs(){
    return(
        <>
        <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            
            {/* Imagen */}
            <div className="relative w-full h-80 md:h-[400px]">
            <Image
                src="/platillos.jpg"
                alt="Equipo preparando comida saludable"
                fill
                className="object-cover rounded-2xl shadow-lg"
            />
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Sobre Nosotros
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    En <span className="font-semibold text-brand-green">Power Meals</span> creemos 
                    que la alimentación saludable no tiene por qué ser complicada. 
                    Nuestro objetivo es ayudarte a ahorrar tiempo y mantener un estilo de vida balanceado 
                    con comidas listas para disfrutar cada día.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    Somos <b>Licenciadas en Gastronomía</b>, con más de <b>7 años de experiencia en la industria culinaria</b>. A lo largo de este tiempo hemos trabajado en cocinas profesionales, hoteles y restaurantes.
                    Actualmente, canalizamos ese conocimiento para ofrecerte una propuesta de alimentación saludable, hecha con calidad, higiene y corazón.
                </p>
            </div>
        </div>
        </section>
        </>
    );
}