import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core";
import { ReactNode, VFC } from "react";

let theme = createMuiTheme({

  palette: {
    primary: {
      main: "#0095D9",
      dark: "#007BBB",
      light: "#BCE2E8"
    },
    text: {
      primary: "#2E2930",
      secondary: "#333"
    }
  },
  typography: {
    h4: {
      fontSize: "1rem",
    }
  },
  overrides: {
    MuiCheckbox: {
      root: {
        padding: 3
      }

    }
  }


})

theme = responsiveFontSizes(theme)

type Props = {
  children: ReactNode
}
export const StyleProvider: VFC<Props> = (porps) => {
  const { children } = porps

  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  )
}