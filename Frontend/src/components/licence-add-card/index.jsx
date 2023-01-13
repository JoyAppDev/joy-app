import React from "react";
import LicenceCard from "../../components/licence-card";

function LicenceAddCard({ image, handleClick }) {



    return (
        <>
            <LicenceCard
                image={image}
                component="label"
            >
                <input hidden accept="video/*" multiple type="file" onChange={handleClick} />
            </LicenceCard>

        </>

    )
}

export default LicenceAddCard;