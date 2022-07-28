import React from 'react'
import Styles from './Rooms.module.css'
import Rooms from './Rooms';
import Footer from '../sections/Footer';





const theData = [
  {

    title: 'Room 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg?crop=0.652xw:1.00xh;0.213xw,0&resize=640:*',

  },
  {

    title: "Room 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg?crop=0.652xw:1.00xh;0.213xw,0&resize=640:*',

  },
  {

    title: 'Room 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg?crop=0.652xw:1.00xh;0.213xw,0&resize=640:*',

  },
  {

    title: 'Room 4',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg?crop=0.652xw:1.00xh;0.213xw,0&resize=640:*',
  },
  {

    title: 'Room 5',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg?crop=0.652xw:1.00xh;0.213xw,0&resize=640:*',
  }
].map(({ title, desc, image }) => {
  return (

    <Rooms key={title} title={title} desc={desc} image={image} />
  )
})
export default function RoomsDetail() {
  return (
    <>
      

      <div>
        <div style={{
          paddingTop: '50px',
          backgroundColor: '#ECECEC'
        }}>
          <h1 className={Styles.Ameneties_heading}>Rooms</h1>

          {theData}
        </div>
        <Footer/>
      </div>
    
    </>
  )
}
