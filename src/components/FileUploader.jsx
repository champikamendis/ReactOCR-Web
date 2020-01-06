import React, { Component } from 'react'
import axios from 'axios';


export default class FileUploader extends Component {
        state={
        selectedFile:null,
        imageUrl:null,
        textConverted:null
      }
  
      fileSelectedHandler = event => {
        this.setState({
          imageUrl:URL.createObjectURL(event.target.files[0]),
          selectedFile: event.target.files[0]
    
        })
      } 
      fileUploadHandler = () => {
        
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('http://localhost:8000/upload', fd, {
          onUploadProgress : ProgressEvent => {
            console.log('Upload Progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total*100) + '%')
          }
        })
          .then(res => {
            console.log(res);
            this.setState({
              ...this.state,
              textConverted:res.data.result
            });
            
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
                  <img className="uploadedImage" src={this.state.imageUrl ?this.state.imageUrl : 'https://via.placeholder.com/400x400'}  />
              </container>
              <button type="submit" className="copy">Copy To Clipboard</button>
              <container className="textHolder">
                  <textarea rows="10" cols="50" className="txtfield" value={this.state.textConverted}/>
                  <br/>
              </container>
            </div>
        )
    }
};
