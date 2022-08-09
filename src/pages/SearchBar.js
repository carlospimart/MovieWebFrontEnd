import React from 'react';

class SearchBar extends React.Component {

  render() {

    const filterText = this.props.filterText;
    const afterYearOnly = this.props.afterYearOnly;
    const Year = this.props.Year;
     
    return (
      
      <form>
        <input type="text" placeholder="Search..." value={filterText}
        onChange={(e)=>this.props.onFilterTextChange(e.target.value)}/>
        <p>
        <input type="checkbox" ckecked = {afterYearOnly} 
        onChange={(e)=>this.props.onAfterYearChange(e.target.checked)}/>
          Only show films of the <input type='number' placeholder="Year" value={Year} 
          onChange={(e)=>this.props.onYear(e.target.value)}/>
        
        </p>
      </form>
      
    );
  }
  
}

export default SearchBar;