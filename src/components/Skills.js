export default function Skills(props) {

  return (
    <div>
      <div className="skillsContainer">
        <h1 className="skillsheader" style={{ color: props.reverseColor.reverse }}>Languages</h1>
        <div className="languages" style={{ color: props.reverseColor.reverse }}>
          <p>JavaScript(ES5, ES6)</p>
          <p>Ruby</p>
          <p>HTML</p>
          <p>CSS</p>
        </div>
      </div>
      <div>
        <h1 className="skillsheader" style={{ color: props.reverseColor.reverse }}>Frameworks</h1>
        <div className="languages"  style={{ color: props.reverseColor.reverse }}>
          <p>Bootstrap</p>
          <p>Ruby on Rails</p>
          <p>Rspec</p>
          <p>Capybara</p>
          <p>Selemium</p>
        </div>
      </div>
      <div>
        <h1 className="skillsheader" style={{ color: props.reverseColor.reverse }}>Skills</h1>
        <div className="languages" style={{ color: props.reverseColor.reverse }}>
          <p>Github</p>
          <p>Gitlab</p>
          <p>Terminal</p>
          <p>Bulma</p>
          <p>Bootstrap</p>
        </div>
      </div>
    </div>
  )
}
