import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import MobileLayout from './layouts/MobileLayout.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MobileLayout>
          <App />
        </MobileLayout>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
