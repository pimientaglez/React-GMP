import React from "react";
import "./Genres.scss";

import { connect } from "react-redux";
import { filterMovies } from '../../actions'

const Genres = (props) => {
  const menu = ['All','Documentary', 'Comedy', 'Horror', 'Crime']
  const [genre, setGenre] = React.useState('');
  const handleSelection = (value) => {
    setGenre(value);
    if(value === 'All') {
      props.filterMovies('');
    } else {
      props.filterMovies(value);
    }
  }
  return (
    <div className="genres">
      <ul>
        {
          menu.map((item, i) => {
            return (
              <li key={item}>
                <a 
                  className={genre === item ? 'selected' : ''}
                  onClick={()=>{handleSelection(item)}}>{item.toUpperCase()}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default connect(null, { filterMovies })(Genres);
