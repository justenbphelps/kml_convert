import {useState} from 'react'
import { FormRadio } from 'shards-react';

// Styles for Shards
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

// Conversion script
const toGeoJSON = require('../static/togeojson')

export default function Uploader() {

  let [fileType, setFileType] = useState('json');

  function upload(e) {
    const file = e.target.files[0]
    let url = window.URL.createObjectURL(file)
    const xhr = new XMLHttpRequest(url)
    xhr.open("GET", url, true)
    xhr.send()
    xhr.onload = function() {
      const kml = xhr.responseXML
      convert(kml, file)
    }
  }

  function convert(kml, file){
    const geojson = toGeoJSON.kml(kml)
  
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(geojson));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    let extension = fileType
    dlAnchorElem.setAttribute("download", `${file.name.slice(0, -4)}.${extension}`);
    dlAnchorElem.click();
    location.reload(false); // Temporary fix. Need to clear file from XHR Request when i have more time
  }

  return(
    <div className="wrapper">
      <h1>.kml converter</h1>
      <div className="radios">
      <p>Convert to:</p>
      <FormRadio
            inline
            name="filetype"
            checked={fileType === 'json'}
            onChange={() => setFileType('json')}
          >
          .json
          </FormRadio>
          <FormRadio
            inline
            name="filetype"
            checked={fileType === 'geojson'}
            onChange={() => setFileType('geojson')}
          >
          .geojson
          </FormRadio>
        </div>

      <span>Select your .kml file below to convert and automatically download the converted .json file</span>
      <div className="upload_form">
        <a id="downloadAnchorElem" ></a>
        <input type="file" id="file_input" name="file_input" onChange={upload} accept=".kml"></input>
        <label htmlFor="file_input" className="upload_label">Select File</label>
      </div>
      <style jsx>{`
        .wrapper {
          width: 350px;
          height: auto;
          padding: 10px;
          text-align: center;
          background-color: #fff;
          border-radius: 4px;
          box-shadow: 2px 6px 10px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          transition: all 0.4s;
        }
        .wrapper:hover{
          box-shadow: 4px 8px 12px rgba(0,0,0,0.2);
          transform: translateY(-10px);
        }
        h1 {
          font-weight: 400;
          font-size: 18px;
          margin-top: 10px;
        }
        p {
          margin-bottom: 10px;
        }
        .radios {
          margin: 5px auto;
        }
        span {
          font-size: 12px;
        }
        input[type="file"] {
          width: 0.1px;
          height: 0.1px;
          opacity: 0;
          overflow: hidden;
          position: absolute;
          z-index: -1;
        }
        .upload_label {
          font-weight: 700;
          width: 150px;
          height: 35px;
          margin: 10px 0;
          border-radius: 4px;
          text-align: center;
          line-height: 150%;
          font-size: 1.15em;
          color: white;
          background-color: #4264fb;
          display: grid;
          align-items: center;
          cursor: pointer;
        }
        .upload_label:hover {
          opacity: 0.9;
        }
        a {
          display: none;
        }
      `}</style>
    </div>
  )
}