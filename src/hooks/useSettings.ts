import { useContext } from "react";
import { SettingsContext } from "../context";
import { SettingsContextType } from "../context/types";

const useSettings = (): SettingsContextType | undefined => useContext(SettingsContext);

export default useSettings;
