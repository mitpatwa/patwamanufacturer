import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Assuming you have react-icons installed

interface WhatsAppIconProps {
  phoneNumber: string;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ phoneNumber }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
      }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppIcon;