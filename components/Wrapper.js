import Uploader from './Uploader';

export default function Wrapper() {
  return (
    <div>
      <Uploader />
      <style jsx>{`
        div {
          height: 100vh;
          width: 100%;
          background-color: #fafafd;
          display: flex;
          flex-direction: column;
          justify-content: center;
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