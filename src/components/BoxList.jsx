import "../resources/newBoxList.css"

function BoxList(){
    return (
        <section className="sectionList">
            <div className="topBoxList">
                <p>Nombre</p>
            </div>
            <ol className="BoxList">
                <button className="buttonCreateBox">+</button>
            </ol>      
        </section>
    );
};

export default BoxList;