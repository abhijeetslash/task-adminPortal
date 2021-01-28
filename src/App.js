import './App.css';

import { BrowserRouter, Route} from 'react-router-dom'

import List from './components/List'
import Main from './screens/Main'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Main}/>
      <Route path='/users' component={List}/>
    </BrowserRouter>
  );
}

export default App;
