import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import MobileLayout from './layouts/MobileLayout.tsx';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider.tsx';
import { Provider } from 'react-redux';
import store from './configs/store.ts';

/**
 * provider 렌더링
 * (provider는 스토어를 제공하는 컴포넌트)
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <MobileLayout>
            <App />
          </MobileLayout>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
