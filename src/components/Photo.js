import dots from '../images/dotstransparent.png'
import photoSvg from '../images/hipic.jpg'
import photoGIF from '../images/gifgray.gif'
import photoGIFWhite from '../images/gifwhite.gif'


export default function Photo(props) {
  console.log(props.currentColor.color);
  const image = props.currentColor.color === '#444444' ? (<img src={photoGIF} alt="React Logo" className="svgphoto" />) : (<img src={photoGIFWhite} alt="React Logo" className="svgphoto" />)
  return (
    <div className="photocontainer">
      {image}
    </div>
  )
}
