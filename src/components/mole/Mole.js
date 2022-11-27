import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {
  //checking to see if the mole is visible
  if (props.isVisible) { //if visble, return image with the ability to click
  return (
    <div className="den">
      {/* onClick is html event. props.isClicked is passed to the mole from the app */}
        <img src={MoleIcon} className="Mole" alt="Mole" onClick={props.isClicked}/> 
    </div>
    )
  } else { //if not visible, return image where css blacks out the mole (by using class name)
    return (
      <div className="no-mole">
        <img src={MoleIcon} className="Mole" alt="Mole" />
      </div>
    )
  }
}

export default Mole
