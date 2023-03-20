import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const element = document.getElementById('root');
if (element) {
  const root = ReactDOM.createRoot(element);

  root.render(
    //<React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    //</React.StrictMode>,
  );
}

reportWebVitals();
