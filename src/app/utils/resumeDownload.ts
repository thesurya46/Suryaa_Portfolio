// Resume file
const resumeUrl = '/Resume.jpg';

export async function downloadResume() {
  try {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Surya_Snata_Panigrahi_Resume.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading resume:', error);
    alert('There was an error downloading the resume. Please try again.');
  }
}