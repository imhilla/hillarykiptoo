
export default function Photo(props){
  return(
    <div className="photocontainer" style={{ backgroundColor: `${props.reverseColor.reverse}` }}>My photo</div>
  )
}
