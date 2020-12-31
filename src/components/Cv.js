export default function Cv(props) {
  return (
    <div className="cv">
      <div className="pdf" style={{ color: props.currentColor.color, backgroundColor: props.reverseColor.reverse }}>PDF</div>
      <h1 className="resumetitle" style={{ color: props.reverseColor.reverse }}>Download my Resume</h1>
      <p className="gmailpropmt" style={{ color: props.reverseColor.reverse }}>Lorem ipsum gretrb jhdhhdk Lorem ipsum gretrb jhdhhdk </p>
      <button className="downloadbutton" style={{ color: props.currentColor.color, backgroundColor: props.reverseColor.reverse }}>Download</button>
    </div>
  )
}
