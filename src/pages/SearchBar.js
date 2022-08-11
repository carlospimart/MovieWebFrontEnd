import React from 'react';

class SearchBar extends React.Component {

  render() {

    const filterText = this.props.filterText;
    const afterYearOnly = this.props.afterYearOnly;
    const afterYearOnly_2 = this.props.afterYearOnly_2;
    const Year = this.props.Year;
    const From = this.props.From;
    const To = this.props.To;
   
    return (
      
      <form>
        <p>
        
        <input type="radio" value="Title" name="Filter"
        onChange={(e)=>this.props.onRadio(e.target.value)}/>Title
        
        <input type="radio" value="Language" name="Filter"
        onChange={(e)=>this.props.onRadio(e.target.value)}/>Language

        <input type="radio" value="Category" name="Filter"
        onChange={(e)=>this.props.onRadio(e.target.value)}/>Category
        
        </p>
        <input type="text" placeholder="Search..." value={filterText}
        onChange={(e)=>this.props.onFilterTextChange(e.target.value)}/>
        <p>
        <input type="checkbox" ckecked = {afterYearOnly} 
        onChange={(e)=>this.props.onAfterYearChange(e.target.checked)}/>
          Only show films of the <input type='number' placeholder="Year" value={Year} 
          onChange={(e)=>this.props.onYear(e.target.value)}/>
        </p>      
        <p>
        <input type="checkbox" ckecked = {afterYearOnly_2} 
        onChange={(m)=>this.props.onAfterYearChange_2(m.target.checked)}/>
        Only show films between years from <input type='number' placeholder="From" value={From} 
          onChange={(s)=>this.props.onFrom(s.target.value)}/> to <input type='number' placeholder="to" 
          value={To} onChange={(n)=>this.props.onTo(n.target.value)}/>
        </p>
      </form>
      
    );
  }
  
}

export default SearchBar;