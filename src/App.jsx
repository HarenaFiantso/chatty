import Router from './routes';
import ThemeProvider from './theme';

import ThemeSettings from './components/settings';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        <Router />
      </ThemeSettings>
    </ThemeProvider>
  );
}
