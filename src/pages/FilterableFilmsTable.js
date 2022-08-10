import React from 'react';
import FilmsTable from './FilmsTable';
import SearchBar from './SearchBar';

class FilterableFilmsTable extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        filterText: "",
        afterYearOnly: false,
        Year: null,
        From: null,
        To: null
      };
      this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
      this.handleAfterYearChange=this.handleAfterYearChange.bind(this);
      this.handleAfterYearChange_2=this.handleAfterYearChange_2.bind(this);
      this.handleYear=this.handleYear.bind(this);
      this.handleFrom=this.handleFrom.bind(this);
      this.handleTo=this.handleTo.bind(this);
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
    handleAfterYearChange_2(AYC_2){
      this.setState({
        afterYearOnly_2:AYC_2
      })
    }
    handleYear(Y){
      this.setState({
        Year:Y
      })
    }
    handleFrom(F){
      this.setState({
        From:F
      })
    }
    handleTo(T){
      this.setState({
        To:T
      })
    }
    
    render() {
      
      return (
        <div className='FilterableFilmsTable'> 
       
      <SearchBar 
                  filterText={this.state.filterText} 
                  afterYearOnly={this.state.afterYearOnly}
                  afterYearOnly_2={this.state.afterYearOnly_2}
                  onFilterTextChange={this.handleFilterTextChange}
                  onAfterYearChange={this.handleAfterYearChange}
                  onAfterYearChange_2={this.handleAfterYearChange_2}
                  onYear={this.handleYear}
                  onFrom={this.handleFrom}
                  onTo={this.handleTo}
                  Year={this.state.Year}
                  From={this.state.From}
                  To={this.state.To}
                  />
                 
        <FilmsTable films={this.props.data} 
                    filterText={this.state.filterText}
                    afterYearOnly={this.state.afterYearOnly}
                    afterYearOnly_2={this.state.afterYearOnly_2}
                    Year={this.state.Year}
                    From={this.state.From}
                    To={this.state.To}
        />
        
        </div>
        
      );
    }
  }
  
  
      

  export default FilterableFilmsTable;