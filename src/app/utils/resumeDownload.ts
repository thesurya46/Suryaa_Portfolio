import { jsPDF } from 'jspdf';

const resumePages = ['/Resume_1.png', '/Resume_2.png'];

export async function downloadResume() {
  try {
    const doc = new jsPDF();

    for (let i = 0; i < resumePages.length; i++) {
      const imgUrl = resumePages[i];

      // Load image to get dimensions
      const img = new Image();
      img.src = imgUrl;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const imgProps = doc.getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      if (i > 0) {
        doc.addPage();
      }

      doc.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }

    doc.save('Surya_Snata_Panigrahi_Resume.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('There was an error generating the resume PDF. Please try again.');
  }
}