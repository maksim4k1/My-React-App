import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
    // Return XML
    return (
        <BrowserRouter className="App">
            <Header/>
            <Main state={props.state} dispatch={props.dispatch}/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
