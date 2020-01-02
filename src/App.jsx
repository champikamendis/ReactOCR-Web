import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import CustomHeader from './components/CustomHeader'; 
import Download from './components/Download';
import FileUploader from './components/FileUploader';
import Footer from './components/Footer';

  
class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
           <div class="jumbotron jumbotron-fluid">
                  <div className="components">
                    <CustomHeader />          
                    <Download />
                    <br/>
                    <br/>
                    <FileUploader/>
                    
                  </div>
              
            </div>
            <Footer></Footer>
        
        </div> 
      </Router>
    );
  }
}

export default App;
