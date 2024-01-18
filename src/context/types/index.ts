import { ReactNode } from "react";

export interface Settings {
  themeMode: string;
  themeLayout: string;
  themeStretch: boolean;
  themeContrast: string;
  themeDirection: string;
  themeColorPresets: string;
}

export interface SettingsContextType extends Settings {
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

export interface SettingsProviderProps {
  children: ReactNode;
}
