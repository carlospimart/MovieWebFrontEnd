import { EmojiFoodBeverageTwoTone } from '@material-ui/icons';
import FilmRow from './FilmRow';
import React, {Component} from "react";


class FilmsTable extends React.Component {
  constructor(props){
    super(props)
        this.state = {
                  
        }
        
    }

  render() {
       
       const filterText = this.props.filterText.toLowerCase();
       const afterYearOnly = this.props.afterYearOnly;
       const afterYearOnly_2 = this.props.afterYearOnly_2;
       const Year = this.props.Year;
       const From = this.props.From;
       const To = this.props.To;
      
      const rows = [];
      rows.push()
      
      this.props.films.forEach((film) => {
        if (film.title.toLowerCase().indexOf(filterText) === -1) {
          return;
        }
        if (afterYearOnly && film.release_year != Year) {
          return;
        }
        if (afterYearOnly_2 && film.release_year < From) {
          return;
        }
        if (afterYearOnly_2 && film.release_year > To) {
          return;
        }
        rows.push(
          
          
          <FilmRow
          film={film}
          key={film.title} />
            
        );
        
      });
      
      return (
        
      <>
      <div>
        
        
      </div>
       <div>
        <table border="1px solid black">
          <thead>
            <tr>
              <th><h3>Title</h3></th>
              <td><h3>ID</h3></td>
              <td><h3>Year</h3></td>
              <td><h3>Language</h3></td>
              <td><h3>Category</h3></td>
              <td><h3>Rating</h3></td>
            </tr>
            {rows}
          </thead>
        </table>
        </div>
        <tbody></tbody> 
        
          
        
        
        </>
      );
    }
  }

  export default FilmsTable;

