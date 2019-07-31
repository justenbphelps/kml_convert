import Wrapper from '../components/Wrapper'

// Thank you's
console.log("This application was built around https://github.com/mapbox/togeojson ")

export default function Index() {
  return (
    <div>
      <Wrapper />
      <style global jsx>{`
        body {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          background-color: #fff;
          color: #333;
        }
      `}</style>
    </div>
  )
}