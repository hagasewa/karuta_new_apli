import { AuthProvider } from "./AuthProvider";
import { QualifyScoreProvider } from "./QualifyScoreProvider";
import { StyleProvider } from "./StyleProvider";

export const AllProviders = (props) => {
  const { children } = props;
  return (
    <>
      <AuthProvider>
        <QualifyScoreProvider>
        <StyleProvider>
          {children}
      </StyleProvider>
      </QualifyScoreProvider>
      </AuthProvider>
    </>
  );
};
