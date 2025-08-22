import React from 'react';
import PropTypes from 'prop-types';
import './PrtButton.css';

function PrtButton({ label = "Print This Page" }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button className="prt-button" onClick={handlePrint}>
      🖨️ {label}
    </button>
  );
}

PrtButton.propTypes = {
  label: PropTypes.string
};

export default PrtButton;
