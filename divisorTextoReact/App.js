import './App.css';
import { Menu} from './components/Menu';
import { Textoarea} from './components/Textoarea';
import { BtnLimpar} from './button/BtnLimpar';
import { Box} from './components/Box';
import { Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Menu name=".com" />
      <Textoarea />
      <BtnLimpar />
      <Box />
      <Footer></Footer>
          </div>
  );
}

export default App;
