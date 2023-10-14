// React core
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
// Components
import RouteHandler from './RouteHandler';
// Style
import './styles/index.scss';
// Utils
import reportWebVitals from './reportWebVitals';
import PageWrapper from './components/PageWrapper';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PageWrapper>
          <RouteHandler />
        </PageWrapper>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
