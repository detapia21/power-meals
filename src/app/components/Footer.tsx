'use client'

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer(){
    return(
        <>
            <footer className="bg-green-950 text-gray-300 py-10">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <Image
                            src="/logo.jpg"
                            alt="Meal Prep saludable"
                            width={80}
                            height={80}
                            className="object-cover rounded-2xl shadow-lg"
                            priority
                        />
                    <h2 className="text-2xl font-bold text-white">Power Meals</h2>
                    <p className="mt-2 text-gray-400">
                        Come bien, vive mejor.
                    </p>
                    </div>

                    {/* Links */}
                    <div>
                    <h3 className="text-white font-semibold mb-3">Navegación</h3>
                    <ul className="space-y-2">
                        <li><Link href="#benefits" className="hover:text-brand-green">Beneficios</Link></li>
                        <li><Link href="#plans" className="hover:text-brand-green">Planes</Link></li>
                        <li><Link href="#about" className="hover:text-brand-green">Nosotros</Link></li>
                        <li><Link href="#contact" className="hover:text-brand-green">Contacto</Link></li>
                    </ul>
                    </div>

                    {/* Contact */}
                    <div>
                    <h3 className="text-white font-semibold mb-3">Contacto</h3>
                    <p>Email: <a href="mailto:powermeals.mx@hotmail.com" className="hover:text-brand-green">powermeals.mx@hotmail.com</a></p>
                    <p className="flex justify-start gap-4 mt-2">
                        <a
                        href="https://wa.me/+526651778000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-green-600 hover:text-green-700"
                        >
                            <FaWhatsapp size={40} />
                            <span className="mt-2 font-semibold">WhatsApp</span>
                        </a>
                        <a
                            href="https://instagram.com/_powermeals"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-pink-500 hover:text-pink-600"
                        >
                            <FaInstagram size={40} />
                            <span className="mt-2 font-semibold">Instagram</span>
                        </a>
                        <a
                            href="https://facebook.com/powermeals"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-blue-600 hover:text-blue-700"
                        >
                            <FaFacebook size={40} />
                            <span className="mt-2 font-semibold">Facebook</span>
                        </a>
                    </p>
                    <p className="mt-4 text-gray-500">© {new Date().getFullYear()} Power Meals. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}