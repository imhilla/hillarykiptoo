export default function Cv(props) {
  const uploadedFileLink = 'https://docs.google.com/document/d/13pzUnlqrqUeNMvqFoHhRyk7A0fA_yHqojTRKEKgcT0o/edit?usp=sharing'
  return (
    <div className="cv">
      <div className="pdf" style={{ color: props.currentColor.color, backgroundColor: props.reverseColor.reverse }}>PDF</div>
      <h1 className="resumetitle" style={{ color: props.reverseColor.reverse }}>View my Resume</h1>
      <p className="gmailpropmt" style={{ color: props.reverseColor.reverse }}>
      </p>
      <a href={uploadedFileLink} target="_blank" rel="noopener noreferrer" download>
        <button className="downloadbutton"
         style={{ color: props.currentColor.color, backgroundColor: props.reverseColor.reverse }}>View CV</button>
      </a>
    </div>
  )
}
