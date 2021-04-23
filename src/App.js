import Page from './components/Page';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;
