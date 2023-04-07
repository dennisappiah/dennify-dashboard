import React from "react";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* header */}
        <Header title="DASHBOARD" subTitle="Welcome to your dashboard" />
      </div>
    </div>
  );
};

export default Dashboard;
