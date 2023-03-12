import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import "../resources/qrGenerator.css"

function QRGenerator({id}) {

  console.log(id)

  const imgRef = useRef(null);
  const [boxNumber, setBoxNumber] = useState(1);

  useEffect(() => {
    if (!imgRef.current) return;
    QRCode.toDataURL(`http://localhost:5000/box/${id}`)
      .then((url) => {
        imgRef.current.src = url;
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.addImage(imgRef.current, 'PNG', 5, 45, 200, 200);
    doc.text('Scan this QR code to see the content of this box.', 24, 235);
    doc.save(`QRCode-Box${boxNumber}.pdf`);
    setBoxNumber(boxNumber+1);
  };

  return (
    <div className="container">
      <img ref={imgRef}/>
      <button onClick={downloadPdf}>Download QR Code</button>
    </div>
  );
}

export default QRGenerator;