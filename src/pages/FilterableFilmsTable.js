import React from 'react';
import FilmsTable from './FilmsTable';
import SearchBar from './SearchBar';

class FilterableFilmsTable extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        filterText: "",
        afterYearOnly: false,
        Year: null
      };
      this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
      this.handleAfterYearChange=this.handleAfterYearChange.bind(this);
      this.handleYear=this.handleYear.bind(this);
    }
    handleFilterTextChange(FT){
      this.setState({
        filterText:FT
      })
  
    }
    handleAfterYearChange(AYC){
      this.setState({
        afterYearOnly:AYC
      })
    }
    handleYear(Y){
      this.setState({
        Year:Y
      })
    }
    
    render() {
      
      return (
        <div className='FilterableFilmsTable'> 
       
      <SearchBar 
                  filterText={this.state.filterText} 
                  afterYearOnly={this.state.afterYearOnly}
                  Year={this.state.Year}
                  onFilterTextChange={this.handleFilterTextChange}
                  onAfterYearChange={this.handleAfterYearChange}
                  onYear={this.handleYear}
                  

                  />
                 
        <FilmsTable films={this.props.data} 
                    filterText={this.state.filterText}
                    afterYearOnly={this.state.afterYearOnly}
                    Year={this.state.Year}
        />
        
        </div>
        
      );
    }
  }
  
  
      

  export default FilterableFilmsTable;