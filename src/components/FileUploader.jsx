import React, { Component } from 'react'
import axios from 'axios';


export default class FileUploader extends Component {
        state={
        selectedFile:null
      }

      fileSelectedHandler = event => {
        this.setState({
          selectedFile: event.target.files[0]
    
        })
      } 
      fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('', fd, {
          onUploadProgress : ProgressEvent => {
            console.log('Upload Progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total*100) + '%')
          }
        })
          .then(res => {
            console.log(res);
        });
    
      }
    render() { 
        return ( 
            <div>
              <container className="imageHolder">
                  <input type='file' className="input" onChange={this.fileSelectedHandler} />
                  <button className="uploader" onClick={this.fileUploadHandler}>Upload</button>
                  <br/>
                  <br/>
                  <img className="uploadedImage" scr={this.state.selectedFile||'./assets/1.png'}  />
              </container>
              <button type="submit" className="OCRbtn">Start OCR</button>
              <container className="textHolder">
                  <input type='text' className="txtfield" />
                  <br/>
              </container>

              
            </div>
        )
    }
};
