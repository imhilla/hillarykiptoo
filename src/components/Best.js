import image1 from '../images/image1.jpg';

export default function Best() {
  return (
    <div className="mybest">
      <h1>My best</h1>
      <div className="promoted">
        <div className="promotedfirst"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <h1 class="best-title">Title</h1>
          <div className="usedContainer">
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
          </div>
          <a href="" className="seeproject button">see the project</a>
        </div>
        <div className="promotedsecond"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <h1 class="best-title">Title</h1>
          <div className="usedContainer">
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
          </div>
          <a href="" className="seeproject button">see the project</a>
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
          <h1 class="best-title">Title</h1>
          <div className="usedContainer">
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
          </div>
          <a href="" className="seeproject button">see the project</a>
        </div>
        <div className="promotedgroup2"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
          <h1 class="best-title">Title</h1>
          <div className="usedContainer">
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
          </div>
          <a href="" className="seeproject button">see the project</a>
        </div>
        <div className="promotedgroup3"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <h1 class="best-title">Title</h1>
          <div className="usedContainer">
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
            <h1 className="used">HTML</h1>
          </div>
          <a href="" className="seeproject button">see the project</a>
        </div>
      </div>
    </div>
  )
}