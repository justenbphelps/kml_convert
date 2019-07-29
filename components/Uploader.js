const toGeoJSON = require('../static/togeojson')

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
  // const download = window.URL.createObjectURL(geojson)
  console.log()

  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(geojson));
  var dlAnchorElem = document.getElementById('downloadAnchorElem');
  dlAnchorElem.setAttribute("href",     dataStr     );
  dlAnchorElem.setAttribute("download", file.name + ".json");
  dlAnchorElem.click();
}

export default function Uploader() {
  return(
    <div className="wrapper">
      <h1>.kml converter</h1>
      <div className="upload_form">
        <a id="downloadAnchorElem" ></a>
        <input type="file" id="file_input" name="file_input" onChange={upload} accept=".kml"></input>
        <label htmlFor="file_input">Select File</label>
      </div>
      <style jsx>{`
        .wrapper {
          width: 350px;
          height: 200px;
          background-color: #fff;
          border-radius: 4px;
          box-shadow: 2px 6px 10px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        h1 {
          font-weight: 400;
          font-size: 24px;
          margin-top: 10px;
        }
        input {
          width: 0.1px;
          height: 0.1px;
          opacity: 0;
          overflow: hidden;
          position: absolute;
          z-index: -1;
        }
        label {
          font-weight: 700;
          width: 150px;
          height: 35px;
          margin-bottom: 10px;
          border-radius: 4px;
          text-align: center;
          line-height: 150%;
          font-size: 1.15em;
          color: white;
          background-color:#47a66a;
          display: grid;
          align-items: center;
          cursor: pointer;
        }
        a {
          display: none;
        }
      `}</style>
    </div>
  )
}