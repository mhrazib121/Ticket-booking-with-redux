import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookingContainer from './Components/BookingCountainer';

function App() {
  return (
    <Provider store={store}>
      <section>
        {/* <!-- Input Data --> */}
        <BookingContainer />

        {/* <!-- Preview Data --> */}

      </section>
    </Provider>
  );
}

export default App;
