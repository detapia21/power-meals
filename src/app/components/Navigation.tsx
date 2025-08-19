'use client'

import Link from "next/link";
import { useState } from "react";

export default function Navigation(){
    
    const [open, setOpen] = useState(false);

    return(
        <>
            <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-brand-green">
                        <span className="text-brand-dark">Power Meals</span>
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="#about" className="text-gray-700 hover:text-brand-green">Nosotros</Link>
                        <Link href="#benefits" className="text-gray-700 hover:text-brand-green">Beneficios</Link>
                        <Link href="#plans" className="text-gray-700 hover:text-brand-green">Planes</Link>
                        <Link href="#contact" className="text-gray-700 hover:text-brand-green">Contacto</Link>
                        <Link href="#services" className="bg-brand-green text-white px-4 py-2 rounded-lg hover:bg-brand-dark transition">
                        Haz tu pedido
                        </Link>
                    </div>

                    {/* Mobile button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setOpen(!open)}
                    >
                        ☰
                    </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="md:hidden bg-white shadow-md">
                    <Link href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Nosotros</Link>
                    <Link href="#benefits" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Beneficios</Link>
                    <Link href="#plans" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Planes</Link>
                    <Link href="#contact" className="block px-4 py-2 bg-brand-green text-white rounded-lg m-2 text-center hover:bg-brand-dark">
                        Haz tu pedido
                    </Link>
                    </div>
                )}
            </nav>
        </>
    );
}