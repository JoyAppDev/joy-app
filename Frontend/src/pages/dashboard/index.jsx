import React from "react";
import LayoutDashboard from "../../components/layout-dashboard";
import LicenceCard from "../../components/licence-card";
import LicenceAddCard from "../../components/licence-add-card";
import initialData from "./../../utils/data.json";
import addLicenceImage from "./../../assets/add_licence_image.png";

function Dashboard() {
    const [file, setFile] = React.useState(null);
    const [uploadedFilePreview, setUploadedFilePreview] = React.useState(null);

    const openLicence = () => {
        alert("Open licence");
    }

    const addLicence = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }

    return(
        <>
            <LayoutDashboard>
                {initialData.map((obj) => (
                <LicenceCard
                    key={obj.id}
                    {...obj}
                    button='Open licence'
                    handleClick={openLicence}
                />
                ))}
                <LicenceAddCard
                    image={addLicenceImage}
                    handleClick={addLicence}
                />
            </LayoutDashboard>
        </>
    )
}

export default Dashboard;