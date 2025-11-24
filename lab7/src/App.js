import './App.css';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Image from './components/Image/Image';
import Store from './components/Store/Store';

function App() {
    return (
        <div className="App">
            <Header/>
            <Content/>
            <Image/>
            <Store/>
        </div>
    );
}

export default App;
