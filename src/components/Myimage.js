import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';

export default function Image() {
  return (
    <div className="imagndesc">
      <div className="imageContainer">
        <div className="image1"><img src={image1} /></div>
        <div className="image2"><img src={image2} /></div>
      </div>
      <div className="imagetext">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}