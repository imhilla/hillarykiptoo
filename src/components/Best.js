import image1 from '../images/image1.jpg';
import image5 from '../images/bookstore.png';


export default function Best(props) {

  return (
    <div className="mybest">
      <h1>LATEST WORKS</h1>
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
          >FAKEBOOK</h1>
          <div className="hidden">
            <div className="usedContainer">
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>RUBY ON RAILS</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>POSTGRESQL</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>CSS</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>GIT</div>
            </div>
            <a href="https://github.com/imhilla/fakebook" className="seeproject button">see the project</a>
          </div>
        </div>
        <div className="promotedsecond"
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
          >GROUPIFY</h1>
          <div className="hidden">
            <div className="usedContainer">
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>RUBY ON RAILS</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>GIT</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>CSS</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>POSTGRESQL</div>
            </div>
            <a href="https://github.com/imhilla/groupify" className="seeproject button">see the project</a>
          </div>
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
          <h1 class="best-title"
            style={{
              color: props.currentColor.color,
            }}>TELCARS</h1>
          <div className="hidden">
            <div className="usedContainer">
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>RAILS</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>REACT</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>REDUX</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>POSTGRESQL</div>
            </div>
            <a href="https://github.com/imhilla/TelCars" className="seeproject button">see the project</a>
          </div>
        </div>
        <div className="promotedgroup2"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
          <h1 class="best-title"
            style={{
              color: props.currentColor.color,
            }}>CATALOG OF PRODUCTS</h1>
          <div className="hidden">
            <div className="usedContainer">
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>REACT</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>REDUX</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>API</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>CSS</div>
            </div>
            <a href="https://github.com/imhilla/catalogs-of-products" className="seeproject button">see the project</a>
          </div>
        </div>
        <div className="promotedgroup3"
          style={{
            backgroundImage: `url(${image5})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <h1 class="best-title"
            style={{
              color: props.currentColor.color,
            }}>BOOKSTORE</h1>
          <div className="hidden">
            <div className="usedContainer">
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>REACT</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>REDUX</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>CSS</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>GIT</div>
            </div>
            <a href="https://github.com/imhilla/Bookstore" className="seeproject button">see the project</a>
          </div>
        </div>
      </div>
    </div>
  )
}