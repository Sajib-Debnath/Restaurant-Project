import './App.css';
import MainComponent from './components/MainComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css'
import { BrowserRouter } from 'react-router-dom';
import myStore from './redux/2_Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
