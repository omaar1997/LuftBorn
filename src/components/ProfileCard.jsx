import { useState } from "react";
import "../styles/profileCard.scss";
import profileImage from "../assets/image.png";

const ProfileCard = () => {
  const [activeTab, setActiveTab] = useState("weekly");

  return (
    <>
      <div className="profileContainer">
        <div className="bestSeller">
          <div className="profilePic">
            <img src={profileImage} alt="Profile Pic" />
          </div>
          <div>
            <span className="text">Report For</span>
            <h1>Best Sales</h1>
          </div>
        </div>
        <div className="sorting">
          <button
            className={activeTab === "daily" ? "active" : ""}
            onClick={() => setActiveTab("daily")}
          >
            Daily
          </button>
          <button
            className={activeTab === "weekly" ? "active" : ""}
            onClick={() => setActiveTab("weekly")}
          >
            Weekly
          </button>
          <button
            className={activeTab === "monthly" ? "active" : ""}
            onClick={() => setActiveTab("monthly")}
          >
            Monthly
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
