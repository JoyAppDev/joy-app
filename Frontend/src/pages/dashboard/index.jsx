import React from "react";
import LayoutDashboard from "../../components/layout-dashboard";
import LicenceCard from "../../components/licence-card";

function Dashboard() {
    return(
        <>
            <LayoutDashboard>
                <LicenceCard />
            </LayoutDashboard>
        </>
    )
}

export default Dashboard;