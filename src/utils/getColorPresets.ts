import palette from "../theme/Palette";

interface ColorPreset {
  name: string;
  value: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
}

export const colorPresets: ColorPreset[] = [
  {
    name: "default",
    ...palette.light.primary,
  },
  {
    name: "purple",
    lighter: "#EBD6FD",
    light: "#B985F4",
    main: "#7635dc",
    dark: "#431A9E",
    darker: "#200A69",
    contrastText: "#fff",
  },
  {
    name: "cyan",
    lighter: "#D1FFFC",
    light: "#76F2FF",
    main: "#1CCAFF",
    dark: "#0E77B7",
    darker: "#053D7A",
    contrastText: palette.light.grey[800],
  },
  {
    name: "blue",
    lighter: "#D1E9FC",
    light: "#76B0F1",
    main: "#2065D1",
    dark: "#103996",
    darker: "#061B64",
    contrastText: "#fff",
  },
  {
    name: "orange",
    lighter: "#FEF4D4",
    light: "#FED680",
    main: "#fda92d",
    dark: "#B66816",
    darker: "#793908",
    contrastText: palette.light.grey[800],
  },
  {
    name: "red",
    lighter: "#FFE3D5",
    light: "#FFC1AC",
    main: "#FF3030",
    dark: "#B71833",
    darker: "#7A0930",
    contrastText: "#fff",
  },
];

export const defaultPreset: ColorPreset = colorPresets[0];
export const purplePreset: ColorPreset = colorPresets[1];
export const cyanPreset: ColorPreset = colorPresets[2];
export const bluePreset: ColorPreset = colorPresets[3];
export const orangePreset: ColorPreset = colorPresets[4];
export const redPreset: ColorPreset = colorPresets[5];

interface PresetMap {
  purple: ColorPreset;
  cyan: ColorPreset;
  blue: ColorPreset;
  orange: ColorPreset;
  red: ColorPreset;
  default: ColorPreset;
}

export default function getColorPresets(
  presetsKey: keyof PresetMap
): ColorPreset {
  return {
    purple: purplePreset,
    cyan: cyanPreset,
    blue: bluePreset,
    orange: orangePreset,
    red: redPreset,
    default: defaultPreset,
  }[presetsKey];
}
