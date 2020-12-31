import photoSvg from '../images/photo.svg'
export default function Photo(props) {
  return (
    <div className="photocontainer" style={{ backgroundColor: `${props.reverseColor.reverse}` }}>
      <img src={photoSvg} alt="React Logo" className="svgphoto"/>
    </div>
  )
}
