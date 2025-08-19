'use client'

import {Truck, ShoppingCart, Smartphone, CreditCard, CheckCircle, MapPinCheck, Clock } from 'lucide-react';

export default function Services(){
    return(
        <>
        <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿Cómo obtener tus meal preps?
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                Ordenar tus meal preps es muy sencillo. Solo sigue estos pasos y disfruta de comida nutritiva todos los días.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
                    <ShoppingCart className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">1. Elige tu plan</h3>
                    <p className="text-gray-600 text-sm">
                        Selecciona entre nuestro menú semanal <b>POWER MEALS</b> o menú personalizado (con plan nutricional).
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
                    <Smartphone className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">2. Haz tu pedido</h3>
                    <p className="text-gray-600 text-sm">
                        Contáctanos por DM o WhatsApp antes del viernes a las 12:00pm., que es cuando cerramos pedidos.
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
                    <CreditCard className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">3. Realiza tu pago</h3>
                    <p className="text-gray-600 text-sm">
                        Revisamos tu menú contigo y realizas pago para confirmar tu pedido. (transferencia o efectivo).
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
                    <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">4. ¡Disfruta!</h3>
                    <p className="text-gray-600 text-sm">
                        Recibe tus comidas los días domingos y miércoles. Solo calienta y disfruta sin complicaciones.
                    </p>
                </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 py-8">
                Entregas
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
                    <MapPinCheck className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        161 Culiacán, Morelos, Tecate, B.C.
                    </h3>
                    <p className="font-semibold text-gray-600 text-bg">
                        Punto de entrega: Casa de dos pisos amarilla con reja negra, junto a Autopartes Morfín.
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
                    <Clock className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        Realizamos entregas los días domingos y miércoles. 3:30pm - 5:00pm.
                    </h3>
                </div>
                <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center">
                    <Truck className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                       También ofrecemos servicio a domicilio           
                    </h3>
                    <p className="font-semibold text-gray-600 text-bg">
                        Costo varía según la zona. 
                    </p>
                </div>
            </div>
            <div className="mt-12 text-center">
                <a
                    href="https://wa.me/521XXXXXXXXXX?text=Hola!%20Me%20gustaría%20saber%20más%20sobre%20los%20meal%20preps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300"
                >
                    Ordena por WhatsApp
                </a>
            </div>
        </div>
        </section>        
        </>
    );
}