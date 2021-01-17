import image1 from '../images/fakebook.PNG';
import image5 from '../images/bookstore.png';
import image3 from '../images/telcars.PNG';
import image4 from '../images/pokemon.PNG';
import image2 from '../images/groupify.PNG';


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
              backgroundColor: props.reverseColor.reverse,
            }}
          >FAKEBOOK</h1>
          <div className="hidden">
            <div className="usedContainer">
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse, paddingLeft: 10, paddingRight: 10, paddingTop: 5,
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
            <a
              href="https://github.com/imhilla/fakebook"
              className="seeproject button"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}
            >see the project</a>
            <a
              href="https://facebook-newclone.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="livelink button"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
                marginRight: 100,
              }}
            >Live link</a>
          </div>
        </div>
        <div className="promotedsecond"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <h1 class="best-title"
            style={{
              color: props.currentColor.color,
              backgroundColor: props.reverseColor.reverse, paddingLeft: 10, paddingRight: 10, paddingTop: 5,
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
                  backgroundColor: props.reverseColor.reverse, paddingLeft: 10, paddingRight: 10, paddingTop: 5,
                  color: props.currentColor.color,
                }}>POSTGRESQL</div>
            </div>
            <a href="https://github.com/imhilla/groupify"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}
              className="seeproject button">see the project</a>
            <a href="/"
              target="_blank"
              rel="noreferrer"
              className="livelink button"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
                marginRight: 100,
              }}
            >Live link</a>
          </div>
        </div>
      </div>
      <div className="group">
        <div
          className="promotedgroup1"
          style={{
            backgroundImage: `url(${image3})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
          <h1 class="best-title"
            style={{
              color: props.currentColor.color,
              backgroundColor: props.reverseColor.reverse, paddingLeft: 10, paddingRight: 10, paddingTop: 5,
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
                  backgroundColor: props.reverseColor.reverse, paddingLeft: 10, paddingRight: 10, paddingTop: 5,
                  color: props.currentColor.color,
                }}>REDUX</div>
              <div className="used"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}>POSTGRESQL</div>
            </div>
            <a href="https://github.com/imhilla/TelCars"
              target="_blank"
              rel="noreferrer"
              className="seeproject button"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}
            >see the project</a>
            <a href="https://intense-stream-27935.herokuapp.com/"
              className="livelink button"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
                marginRight: 100,
              }}
            >Live link</a>
          </div>
        </div>
        <div className="promotedgroup2"
          style={{
            backgroundImage: `url(${image4})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
          <h1 class="best-title"
            style={{
              color: props.currentColor.color,
              backgroundColor: props.reverseColor.reverse, paddingLeft: 10, paddingRight: 10, paddingTop: 5,
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
            <a href="https://github.com/imhilla/catalogs-of-products"
              target="_blank"
              rel="noreferrer"
              className="seeproject button"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
              }}
            >see the project</a>
            <a href="https://60042a89ab6d721e53aa755c--agitated-pare-bd7288.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="livelink button"
              style={{
                backgroundColor: props.reverseColor.reverse,
                color: props.currentColor.color,
                marginRight: 100,
              }}
            >Live link</a>
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
              backgroundColor: props.reverseColor.reverse, paddingLeft: 10, paddingRight: 10, paddingTop: 5,
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
            <div>
              <a href="https://github.com/imhilla/Bookstore"
                target="_blank"
                rel="noreferrer"
                className="seeproject button"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                }}
              >see the project</a>
              <a href="https://bookstore-2.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className="livelink button"
                style={{
                  backgroundColor: props.reverseColor.reverse,
                  color: props.currentColor.color,
                  marginRight: 100,
                }}
              >Live link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}