import React from "react";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Movie from "./Forms/Movie";
import movieList from '../utils/movieList';
import "./app.scss";

const App = () => {
  const [add, setAdd] = React.useState(false);
  const [movieDetail, setMovieDetail] = React.useState(false);
  const [addForm, setAddForm] = React.useState(null);
  React.useEffect(()=>{
    if (add) {
      setAddForm(<Movie onHandleClick={()=>closeForm()} action={"add"} />);
    } else {
      setAddForm(null);
    }
  }, [add]);

  const openForm = () => {
    setAdd(true);
  }
  const closeForm = () => {
    setAdd(false);
  }
  const openDetails = (movie) => {
    setMovieDetail(movie);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  const closeDetails = () => {
    setMovieDetail(null);
  }
  return (
    <div className="gmp">
      <ErrorBoundary>
        <Header 
          addForm={addForm} 
          handleClick={()=> openForm()} 
          movieDetail={movieDetail}  
          handleMovieClick={()=> closeDetails()}/>
        <Main movieList={movieList} handleMovieClick={(movie)=> openDetails(movie)}/>
        <Footer />
      </ErrorBoundary>
    </div>
  ); 
    
};

export default App;
