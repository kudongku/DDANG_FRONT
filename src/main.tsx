import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import MobileLayout from './layouts/MobileLayout.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.tsx';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';

/**
 * 스토어 생성
 * (지금은 deprecated 되어서 다른 라이브러리를 사용해야함)
 * 크롬의 Redux DevTools 확장 프로그램을 사용하면 더 쉽게 디버깅할 수 있음
 */
const store = createStore(
  rootReducer,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

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
