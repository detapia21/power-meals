'use client'

import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Contact(){
    return(
        <>
        <section className="bg-white py-12" id='contact'>
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Contáctanos</h2>
                <p className="text-gray-600 mb-8">
                    ¡Estamos disponibles en nuestras redes sociales!
                </p>
                <div className="flex justify-center gap-8">
                    <a
                        href="https://wa.me/521XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-green-600 hover:text-green-700"
                    >
                        <FaWhatsapp size={40} />
                        <span className="mt-2 font-semibold">WhatsApp</span>
                    </a>
                    <a
                        href="https://instagram.com/tuusuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-pink-500 hover:text-pink-600"
                    >
                        <FaInstagram size={40} />
                        <span className="mt-2 font-semibold">Instagram</span>
                    </a>
                    <a
                        href="https://facebook.com/tuusuario"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-blue-600 hover:text-blue-700"
                    >
                        <FaFacebook size={40} />
                        <span className="mt-2 font-semibold">Facebook</span>
                    </a>
                </div>
            </div>
        </section>
        </>
    );
}