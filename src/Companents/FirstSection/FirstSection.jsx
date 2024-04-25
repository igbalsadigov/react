import React from 'react'
import  styles from "../FirstSection/First.module.css"


const FirstSection = () => {
  return (
    <div className={styles.secondContainer}>
        <div className={styles.birContainer}> 
      <div className={styles.thiridContainer}>
        <h1>We Fight <span >For Your Right</span></h1> 
        <p>Another cool free template by the fine folks at <a href="">Colorib.</a></p>
        <button>
                FREE CONSULTATIN  
        </button>
      </div>
      </div>
    </div>
  )
}

export default FirstSection
