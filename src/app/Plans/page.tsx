
export default function Plans() {

    return( <section id="plans" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-6">
          Plan Semanal
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Incluye 5 comidas por semana completas y balanceadas.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl text-center font-semibold text-gray-900 mb-3">Proteínas</h3>
            <p className="text-gray-600 text-center mb-4">
              <b>100g. de proteína cocida.</b><br/>
            </p>
                Carne 1-2 días: molida, arrachera, bistec o filete.<br/>
                Pescado 1-2 días: tilapia, atún o atún fresco.<br/>
                Pollo 2-3 días: pechuga o pierna
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl text-center font-semibold text-gray-900 mb-3">Carbohidratos</h3>
            <p className="text-gray-600 text-center mb-4">
                <b>100g. de carbohidratos.</b>           
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl text-center font-semibold text-gray-900 mb-3">Vegetales</h3>
            <p className="text-gray-600 text-center mb-4">
                <b>1 taza de vegetales cocidos.</b>
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
    );
}