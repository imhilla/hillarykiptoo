import dots from '../images/dotstransparent.png'
import photoSvg from '../images/hipic.jpg'

export default function Photo(props) {
  return (
    <div className="photocontainer">
      <img src={dots} alt="React Logo" className="dots1" />
      <img src={dots} alt="React Logo" className="dots2" />
      {/*<img src={dots} alt="React Logo" className="dots3" /> */}
      <img src={photoSvg} alt="React Logo" className="svgphoto" />
    </div>
  )
}
