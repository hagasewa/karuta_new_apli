import { AuthProvider } from "./AuthProvider";
import { StyleProvider } from "./StyleProvider";

export const AllProviders = (props) => {
  const { children } = props;
  return (
    <>
      <AuthProvider>
        <StyleProvider>
          {children}
      </StyleProvider>
      </AuthProvider>
    </>
  );
};
