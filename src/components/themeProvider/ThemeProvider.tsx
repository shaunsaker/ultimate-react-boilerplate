import { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "../../theme/theme";

type Props = { children: ReactNode };

export const ThemeProvider = (props: Props) => {
  return <StyledThemeProvider {...props} theme={theme} />;
};
