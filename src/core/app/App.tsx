import { Header } from '../../pages/header/header';
import { Footer } from '../../pages/footer/footer';
import './App.css';
import { Characters } from '../../pages/characters/characters';

export function App() {
  return (
    <div className="App">
      <Header></Header>
      <Characters></Characters>
      <Footer></Footer>
    </div>
  );
}
