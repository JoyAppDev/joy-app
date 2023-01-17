import React from 'react';
import LicenceCard from '../../components/licence-card';

function LicenceAddCard({ image, addLicence }) {
  return (
    <>
      <LicenceCard image={image} component="label">
        <input
          hidden
          accept="video/*"
          multiple
          type="file"
          onChange={addLicence}
          button="Add License"
        />
      </LicenceCard>
    </>
  );
}

export default LicenceAddCard;
