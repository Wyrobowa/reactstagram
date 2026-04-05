import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

// Components
import App from './App';

// Stores
import store from './configureStore';

// Styles
import 'tharaday/styles.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}
