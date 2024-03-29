import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import "../resources/styles/qrGenerator.css"

function QRGenerator() {
  const imgRef = useRef(null);
  const [boxNumber, setBoxNumber] = useState(1);

  useEffect(() => {
    if (!imgRef.current) return;
    QRCode.toDataURL(`http://localhost:5000/box`)
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
    <div className="QrGenerator__container py-14 mt-16">
      <img ref={imgRef}/>
      <button onClick={downloadPdf} className="py-6 font-semibold">Download QR Code</button>
    </div>
  );
}

export default QRGenerator;