export default function Footer() {
  return (
    <div id="footer">
      
        <span>Made for and built using Mapbox's <a href="https://github.com/mapbox/togeojson">toGeoJSON</a> conversion script</span>
      <style jsx>{`
        #footer {
          height: 50px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 10px;
          opacity: 0.6;
        }
      `}</style>
    </div>
  )
}