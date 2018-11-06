import * as React from 'react';
// import injectStyles from 'react-jss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content'
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
