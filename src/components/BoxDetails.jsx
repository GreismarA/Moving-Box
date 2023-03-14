import "../resources/boxDetails.css"

function BoxDetails() {
    return (
        <section className="flex flex-col items-center section-box">
            <div className="containerBoxDetails px-4 mt-8 pt-4 pb-8 w-10/12 lg:px-8 xl:w-2/4">
                <h1 className="text-center text-2xl md:text-4xl font-semibold">Nombre de la Caja</h1>
                <ol className="md:py-8 flex flex-col gap-2">
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Nombre:</p><p>Value</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Color:</p><p>Value</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Contentido:</p><p>Value</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Items:</p><p>Value</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Media:</p><p>Value</p></li>
                    </ol>
                <ol className="md:py-8 flex flex-col gap-2">
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Ubicación:</p><p>Value</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Peso:</p><p>Value</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Propietario:</p><p>Value</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Tipo de contenido:</p><p>Value</p></li>
                    <li className="flex flex-col md:flex-row"><p className="font-semibold">Nota:</p><p>Value</p></li>
                </ol>
                <hr />
                </div>
            <div className="flex justify-center">
                <button type='text' className="rounded-btn h-24 w-24 text-5xl">.</button>
            </div>
            <div className="containerBoxDetails px-4 py-8 w-10/12 lg:pt-8 xl:w-2/4 lg:px-8">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 py-4 text-center text-white text-xs">
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                    <div className="rounded-md p-4 md:p-4 md:py-8 bg-black">image</div>
                </div>
            </div>
        </section>
    );
};

export default BoxDetails;