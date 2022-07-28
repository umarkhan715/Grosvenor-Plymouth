import React, {useState} from 'react'
import Styles from './Rooms.module.css'
import ReactImageGalleryTest from './RoomGallery';



export default function Rooms(props) {
  
  const [isPreviewShown, setPreviewShown] = useState(false);

  const ShowGallery = () => {
    setPreviewShown(!isPreviewShown);
  }
  return (
    <>
      <div className={Styles.main}>
        <div className={`container ${Styles.conatiner_ameneties}`} >
          <div className='row'>
            <div className='col-8'>
              <div className={Styles.cards_left}>
                <div><h1>{props.title}</h1></div>
                <div><p>{props.desc}</p></div>
                <div><button>Book</button></div>
              </div>
            </div>
            <div className='col-4' >
              <div className={Styles.cards_right}>
                <img className={Styles.room_img} src={props.image} alt='room' onClick={ShowGallery} placeholder="clickhere"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPreviewShown && <ReactImageGalleryTest/>}


    </>
  )
}
