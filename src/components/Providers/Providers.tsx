import { ThemeProvider } from '@context/themeContext';

interface ProvidersProps {
  children?: any;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default Providers;
