import React from "react";
import Image from "next/image";

export default function PromotionSection() {
    return (
        <section id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    PROMO EN DUO SALUDABLE
                </h2>
                <p className="text-lg text-brand-green font-bold">
                    !Nos unimos para tu salud y comodidad!
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    ¡Es momento de llevar tu alimentación al siguiente nivel con un enfoque en tu bienestar real, sin dietas extremas ni culpa!
                    <br/><br/>
                    <b>Clientes de Power Meals.</b><br/>
                    Obtén 10% de descuento en nuestros Meal Preps (plan de 5 días) al presentar comprobante de Consulta con la Nutrióloga Rosa Liliana Basilio. 
                    <br/><br/>
                    <b>Consultantes de Nutrióloga Rosa Liliana Basilio</b><br/>
                    Recibe 10% de descuento en tu consulta al mostrar ticket de compra de MEAL PREPS con POWER MEALS.
                    <br/><br/>
                    Alimentación balanceada + asesoría profesional = 20% DE DESCUENTO para ¡Una mejor versión de ti!
                    <br/>
                    Válido en Tecate B.C.       
                    <br/>
                    Promoción permanente
                </p>
            </div>
            {/* Imagen */}
            <div className="relative w-full h-80 md:h-[400px]">
            <Image
                src="/about-mealprep.jpg"
                alt="Promoción en Duo Saludable"
                fill
                className="object-cover rounded-2xl shadow-lg"
            />
            </div>
        </div>
        </section>
    );
}