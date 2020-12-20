export default function Hi(props) {
  console.log(props.currentColor)
  return (
    <div className="hiContainer" style={{ backgroundColor: `${props.currentColor.color}` }}>
      <div className="emoji">🤓</div>
      <div className="hiDescription"  style={{ color: `${props.reverseColor.reverse}` }}>
        <h1 className="text">Hi, my name is Hillary.</h1>
        <h1 className="text">I'm a software developer.</h1>
        <h1 className="text">I can help you build a product feature.</h1>
      </div>
    </div>
  )
}