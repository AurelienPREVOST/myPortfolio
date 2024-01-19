import React from 'react';
import { PDFDocument } from 'pdf-lib';

function Navbar() {
  const handleDownloadCV = async () => {
    const pdfBytes = await fetch('/src/assets/cvPrevostAurelien.pdf').then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pdfBlob = await pdfDoc.save();

    const pdfUrl = URL.createObjectURL(new Blob([pdfBlob]));
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'mon_cv.pdf';

    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  const handlePortfolioClick = () => {
    const speed = 1;
    const interval = 10;
    const pageHeight = document.documentElement.scrollHeight;
    const totalIterations = Math.ceil(pageHeight / speed);
    const distancePerIteration = pageHeight / totalIterations;
    let currentPosition = 0;
    const scrollInterval = setInterval(() => {
      window.scrollBy(0, distancePerIteration);
      currentPosition += distancePerIteration;
      if (currentPosition >= pageHeight) {
        clearInterval(scrollInterval);
      }
    }, interval);
  };

  const displayContactView = () => {
    const textToShow = "aurelienprevost77@gmail.com   -   06 80 77 57 22   -   (86) Vienne - Poitiers";
    
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    let index = 0;

    const showText = () => {
      if (index < textToShow.length) {
        const letter = document.createTextNode(textToShow[index]);
        modal.appendChild(letter);
        index++;

        setTimeout(showText, 50);
      } else {
        setTimeout(() => {
          modal.style.display = 'none';
          document.body.removeChild(modal);
        }, 5000);
      }
    };

    modal.style.display = 'block';
    showText();
  };

  return (
    <nav id="Navbar">
      <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <li onClick={handleDownloadCV} style={{ cursor: 'pointer' }}>
          Qui suis-je
        </li>
        <li onClick={handlePortfolioClick} style={{ cursor: 'pointer' }}>
          Portfolio
        </li>
        <li onClick={displayContactView} style={{ cursor: 'pointer' }}>
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
