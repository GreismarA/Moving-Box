import "../resources/newBoxList.css"

function BoxList(){
    return (
        <section className="sectionList ">
            <div className="topBoxList flex justify-between">
                <div className="flex gap-x-20">
                    <img/>
                <p>Nombre</p>
                </div>
                <div className="flex gap-x-8 mr-[30px]">
                    <button className="py-3 px-8 rounded font-medium bg-[#e2e756] hover:bg-[#f5f89f]">Renombrar</button>
                    <button className="py-3 px-8 rounded font-medium bg-[#e2e756] hover:bg-[#f5f89f]">Editar</button>
                    <button className="py-3 px-8 rounded font-medium bg-[#e2e756] hover:bg-[#f5f89f]">Eliminar</button>
                </div>
            </div>

            <ol className="BoxList">
                <button className="buttonCreateBox">+</button>
            </ol>      
        </section>
    );
};

export default BoxList;