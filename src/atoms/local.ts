import { webDarkTheme, webLightTheme } from "@fluentui/react-components";
import { atomWithStorage } from "jotai/utils";
// 主题
export const themeAtom = atomWithStorage("Theme", 'DefaultLight');

export function getTheme(themeName: string) {
    switch (themeName) {
      case "DefaultDark":
        return webDarkTheme;
      case "DefaultLight":
        return webLightTheme;
      default:
        return webLightTheme;
    }
  }