import React from 'react';
import { Link } from "../react-frames";
import './css/style.css'
import UpdateLanguage from './UpdateLanguage';
class LanguageRow extends React.Component {

    render() {
        const language = this.props.language;
        
        
        return (

          <>
            <tr>
            <td>{language.language_id}</td>
            <td>{language.name}</td>
            </tr>
            <br/>
          
          
            
          </> 
          
        );
      }
    }


   
     
  export default LanguageRow;