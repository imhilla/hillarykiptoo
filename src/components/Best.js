import image1 from '../images/image1.jpg';

export default function Best() {
  return (
    <div className="mybest">
      <h1>My best</h1>
      <div className="promoted">
        <div className="promotedfirst">
          <img src={image1} />
        </div>
        <div className="promotedsecond">
          <img src={image1} />
        </div>
      </div>
      <div className="group">
        <div
          className="promotedgroup1"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
        </div>
        <div className="promotedgroup2"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
        </div>
        <div className="promotedgroup3"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>

        </div>
      </div>
    </div>
  )
}