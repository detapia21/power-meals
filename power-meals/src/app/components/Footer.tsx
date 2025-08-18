'use client'

import Link from "next/link";


export default function Footer(){
    return(
        <>
            <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
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
                    <p>Email: <a href="mailto:info@mealprep.com" className="hover:text-brand-green">info@mealprep.com</a></p>
                    <p>WhatsApp: <a href="https://wa.me/521234567890" className="hover:text-brand-green">+52 123 456 7890</a></p>
                    <p className="mt-4 text-gray-500">© {new Date().getFullYear()} MealPrep. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}