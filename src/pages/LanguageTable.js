import React from 'react';
import  LanguageRow from './LanguageRow';


class LanguageTable extends React.Component {
  render() {
  
    const filterText = this.props.filterText.toLowerCase();
  

   
   const rows = [];
   
   this.props.language.forEach((language) => {
     if (language.name.toLowerCase().indexOf(filterText) === -1) {
       return;
     }
     
     rows.push(
       
       
       <LanguageRow
       language={language}
       key={language.name} />
         
     );
     
   });
   
   return (
     <table border="1px solid black">
       <thead>
         <tr>
           <th>ID</th>
           <th>Language</th>
         </tr>
       </thead>
       <tbody>
      
        {rows}
        
       </tbody>
     </table>
   );
 }
}

  export default LanguageTable;
