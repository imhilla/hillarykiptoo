import photoSvg from '../images/dotstransparent.png'
import dots from '../images/hipic.jpg'

export default function Photo(props) {
  return (
    <div className="photocontainer">
      <div>
        <img src={dots} alt="React Logo" className="dots1" />
      </div>
      <img src={photoSvg} alt="React Logo" className="svgphoto" />
    </div>
  )
}
