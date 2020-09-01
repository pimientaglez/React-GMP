import React from "react";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Movie from "./Forms/Movie";
import "./app.scss";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      'add': false
    }
  }
  componentDidMount() {
    console.log('This is the component did mount method');
  }
  openForm (action) {
    this.setState({[action]: true})
  }
  closeForm (action) {
    this.setState({[action]: false})
  }
  render(){
    const addForm = this.state.add ? <Movie onHandleClick={()=>this.closeForm('add')} action={"add"} /> : null;
    return (
      <div className="gmp">
        <ErrorBoundary>
          <Header addForm={addForm} handleClick={(act)=> this.openForm(act)} />
          <Main/>
          <Footer />
        </ErrorBoundary>
      </div>
    );
  } 
    
};

export default App;
