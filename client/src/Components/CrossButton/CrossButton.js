import styles from './CrossButton.module.css'
import closeIcon from './close_icon.svg'
const CrossButton = (props) => {
  const {handleClick} = props;

  return (
    <button onClick={handleClick} className={styles.container}>
      <img className={styles.image} src={closeIcon} alt="close"/>
    </button>
  )
}

export default CrossButton;