import React from "react";
import LayoutDashboard from "../../components/layout-dashboard";
import LicenceCard from "../../components/licence-card";
import initialData from "./../../utils/data.json";
import addLicenceImage from "./../../assets/add_licence_image.png";

function Dashboard() {
    return(
        <>
            <LayoutDashboard>
                {initialData.map((obj) => (
                <LicenceCard
                    key={obj.id}
                    {...obj}
                    button='Open licence'
                />
                ))}
                <LicenceCard
                    image={addLicenceImage}
                />
            </LayoutDashboard>
        </>
    )
}

export default Dashboard;