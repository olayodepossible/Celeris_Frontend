import homelogo from "../../assets/logos/home.svg";
import joblistlogo from "../../assets/logos/barchar.svg";
import creditSearch from "../../assets/logos/creditSearch.svg";
import decisionEngine from "../../assets/logos/decisionEngine.svg";
import settingsLogo from "../../assets/logos/settings.svg";
import signOut from "../../assets/logos/signOut.svg";

export const links = [
  {
    icon: homelogo,
    name: "Dashboard",
    path: "/dashboard",
  },
  { icon: joblistlogo, name: "Job Lists", path: "/jobList" },
  { icon: creditSearch, name: "Credit Search", path: "/creditSearch" },
  { icon: decisionEngine, name: "Decision Engine", path: "/decisionEngine" },
  { icon: settingsLogo, name: "Settings", path: "/settings" },
  { icon: signOut, name: "Sign Out", path: "/signOut" },
];
