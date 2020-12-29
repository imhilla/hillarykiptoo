import image1 from '../images/image1.jpg';

export default function Best(props) {
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
          <h1 class="best-title"
            style={{
              color: props.currentColor.color,
            }}
          >Title</h1>
          <div className="usedContainer">
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
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
          <h1 class="best-title"
          >Title</h1>
          <div className="usedContainer">
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
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
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
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
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
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
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
            <div className="used"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}>HTML</div>
          </div>
          <a href="" className="seeproject button">see the project</a>
        </div>
      </div>
    </div>
  )
}