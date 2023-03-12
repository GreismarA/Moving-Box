import "../resources/boxDetails.css"

function BoxDetails(){
    return (
        <section className="section">
            <div className="containerBoxDetails">
                <h1 className="nameBox">Name Box</h1>
                <hr />
                <ol>
                    <li><p>Name:</p><p>Value</p></li>
                    <li><p>Color:</p><p>Value</p></li>
                    <li><p>Content:</p><p>Value</p></li>
                    <li><p>Items:</p><p>Value</p></li>
                    <li><p>Media:</p><p>Value</p></li>
                    <li><p>Ubication:</p><p>Value</p></li>
                    <li><p>Weidth:</p><p>Value</p></li>
                    <li><p>Owner:</p><p>Value</p></li>
                    <li><p>Type of Content:</p><p>Value</p></li>
                    <li><p>Note:</p><p>Value</p></li>
                </ol>
                <hr />
                <div className="containerMedia">
                    <div className="media">image</div>
                    <div className="media">image</div>
                    <div className="media">image</div>
                    <div className="media">image</div>
                    <div className="media">image</div>
                </div>
                <div className="containerMedia">
                    <div className="media">image</div>
                    <div className="media">image</div>
                    <div className="media">image</div>
                    <div className="media">image</div>
                    <div className="media">image</div>
                </div>
            </div>
        </section>
    );
};

export default BoxDetails;