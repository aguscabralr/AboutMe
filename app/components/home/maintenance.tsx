"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import Maintenance from "../../../public/icons/maintenance.json";

const MaintenancePage = () => {
  return (
    <Player
      autoplay
      loop
      src={Maintenance}
      className="w-96 h-96"
    />
  )
};

export default MaintenancePage;