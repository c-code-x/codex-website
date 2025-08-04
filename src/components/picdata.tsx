import {useEffect,useState} from 'react';

const PicsThing = () => {
  const images: string[] = [
            "https://drive.google.com/uc?export=view&id=1yqKurF5JvZJhldNhegI_gu0WBcPNPjlg",
            "https://drive.google.com/uc?export=view&id=1-o6OrBZKfRJGFeT_dwiO4FfbCw5xqXkJ",
            "https://drive.google.com/uc?export=view&id=1jBPMCqENHq-aH6ITk-Pa6Dw49kdnGQmP",
            "https://drive.google.com/uc?export=view&id=1c5Y8x7DqR0D8aF0VbCNW15CAyVI7KQl3",
            "https://drive.google.com/uc?export=view&id=1yRQDTsHIMR9jmR9YUD5S1CCC8M2eSPZR"
          ]; 
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex(prev => (
        prev === images.length - 1 ? 0 : prev + 1
      ));
    }, 3000);
    // Return a cleanup function
    return () => {
      clearInterval(intervalId);
    };
  },[images.length]);
  return (
    images[imageIndex]
  );
}

export default PicsThing;