import photoGIF from '../images/gifgray.gif'
import photoGIFWhite from '../images/gifwhite.gif'


export default function Photo(props) {
  const image = props.currentColor.color === '#444444' ? (<img src={photoGIF} alt="React Logo" className="svgphoto" />) : (<img src={photoGIFWhite} alt="React Logo" className="svgphoto" />)
  return (
    <div className="photocontainer">
      {image}
    </div>
  )
}
