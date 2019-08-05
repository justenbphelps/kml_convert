import Uploader from './Uploader';
import Footer from './Footer'

export default function Wrapper() {
  return (
    <div id="wrapper">
      <div></div>
      <Uploader />
      <Footer />
      <style jsx>{`
        #wrapper {
          height: 100vh;
          width: 100%;
          background-image: url('/static/map.png');
          background-size: cover;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        img {
          padding-top: 20px;
          opacity: 0.5;
        }
      `}</style>
    </div>
  )
}