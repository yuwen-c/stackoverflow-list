import './App.css';
import 'tachyons';
import Search from './components/search/Search';
import Tags from './components/tags/Tags';
import Questions from './components/questions/Questions';

function App() {
  return (
    <div className="App">
      <Search />
      <div className="mt5">
        <Tags />
        <Questions />
      </div>
    </div>
  );
}

export default App;
