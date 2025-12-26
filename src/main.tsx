import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { AppProviders } from './context/AppProviders.tsx';
import { FavoritesProvider } from './context/FavoritesContext.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <FavoritesProvider>
  <AppProviders>
    <App />
    </AppProviders>
    </FavoritesProvider>
  </BrowserRouter>
)
