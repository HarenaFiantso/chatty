// @ts-ignore
import getColorPresets, { colorPresets } from "../utils/getColorPresets";

import { ReactNode, createContext, useEffect } from "react";
import { defaultSettings } from "../config/config";
import useLocalStorage from "../hooks/useLocalStorage";

interface Settings {
  themeMode: string;
  themeLayout: string;
  themeStretch: boolean;
  themeContrast: string;
  themeDirection: string;
  themeColorPresets: string;
}

interface SettingsContextType extends Settings {
  onToggleMode: () => void;
  onChangeMode: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onToggleDirection: () => void;
  onChangeDirection: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeDirectionByLang: (lang: string) => void;
  onToggleLayout: () => void;
  onChangeLayout: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onToggleContrast: () => void;
  onChangeContrast: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeColor: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  setColor: (color: string) => void;
  colorOption: { name: string; value: string }[];
  onToggleStretch: () => void;
  onResetSetting: () => void;
}

interface SettingsProviderProps {
  children: ReactNode;
}

const initialState: SettingsContextType = {
  ...defaultSettings,
  onToggleMode: () => {},
  onChangeMode: () => {},
  onToggleDirection: () => {},
  onChangeDirection: () => {},
  onChangeDirectionByLang: () => {},
  onToggleLayout: () => {},
  onChangeLayout: () => {},
  onToggleContrast: () => {},
  onChangeContrast: () => {},
  onChangeColor: () => {},
  setColor: () => {},
  colorOption: [],
  onToggleStretch: () => {},
  onResetSetting: () => {},
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}: SettingsProviderProps) => {
  const [settings, setSettings] = useLocalStorage<Settings>({
    key: "settings",
    defaultValue: {
      themeMode: initialState.themeMode,
      themeLayout: initialState.themeLayout,
      themeStretch: initialState.themeStretch,
      themeContrast: initialState.themeContrast,
      themeDirection: initialState.themeDirection,
      themeColorPresets: initialState.themeColorPresets,
    },
  });

  const isArabic = localStorage.getItem("i18nextLng") === "ar";

  useEffect(() => {
    if (isArabic) {
      onChangeDirectionByLang("ar");
    }
  }, [isArabic]);

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  const onChangeMode = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  const onToggleDirection = () => {
    setSettings({
      ...settings,
      themeDirection: settings.themeDirection === "rtl" ? "ltr" : "rtl",
    });
  };

  const onChangeDirection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({
      ...settings,
      themeDirection: event.target.value,
    });
  };

  const onChangeDirectionByLang = (lang: string) => {
    setSettings({
      ...settings,
      themeDirection: lang === "ar" ? "rtl" : "ltr",
    });
  };

  const onToggleLayout = () => {
    setSettings({
      ...settings,
      themeLayout:
        settings.themeLayout === "vertical" ? "horizontal" : "vertical",
    });
  };

  const onChangeLayout = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({
      ...settings,
      themeLayout: event.target.value,
    });
  };

  const onToggleContrast = () => {
    setSettings({
      ...settings,
      themeContrast: settings.themeContrast === "default" ? "bold" : "default",
    });
  };

  const onChangeContrast = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({
      ...settings,
      themeContrast: event.target.value,
    });
  };

  const onChangeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({
      ...settings,
      themeColorPresets: event.target.value,
    });
  };

  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch,
    });
  };

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeLayout: initialState.themeLayout,
      themeStretch: initialState.themeStretch,
      themeContrast: initialState.themeContrast,
      themeDirection: initialState.themeDirection,
      themeColorPresets: initialState.themeColorPresets,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onToggleMode,
        onChangeMode,
        onToggleDirection,
        onChangeDirection,
        onChangeDirectionByLang,
        onToggleLayout,
        onChangeLayout,
        onChangeContrast,
        onToggleContrast,
        onToggleStretch,
        onChangeColor,
        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color: any) => ({
          name: color.name,
          value: color.main,
        })),
        onResetSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext };

export default SettingsProvider;
