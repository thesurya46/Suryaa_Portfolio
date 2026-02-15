// Resume images
import resumePage1 from 'figma:asset/91f98437c955e62de86b2d5f57c6e1fe0d8d24de.png';
import resumePage2 from 'figma:asset/fbeec2b0a36d866dc13ea891d98638180a85fb64.png';

export async function downloadResume() {
  try {
    // Method 1: Create a canvas and combine both images into a PDF-like format
    // For simplicity, we'll download both images sequentially
    
    // Download first page
    await downloadImage(resumePage1, 'Surya_Snata_Panigrahi_Resume_Page_1.png');
    
    // Wait a bit before downloading second page to avoid browser blocking
    setTimeout(() => {
      downloadImage(resumePage2, 'Surya_Snata_Panigrahi_Resume_Page_2.png');
    }, 300);
    
  } catch (error) {
    console.error('Error downloading resume:', error);
    alert('There was an error downloading the resume. Please try again.');
  }
}

async function downloadImage(imageUrl: string, filename: string) {
  try {
    // Fetch the image as blob
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    // Create a temporary URL for the blob
    const blobUrl = window.URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the blob URL
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 100);
  } catch (error) {
    console.error('Error downloading image:', error);
    // Fallback: try direct download
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}