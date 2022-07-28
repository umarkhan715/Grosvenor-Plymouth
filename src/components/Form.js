// import "./styles.css"
import { BookingForm } from "./Date.tsx"
import "flatpickr/dist/themes/material_orange.css"

export default function App() {
  return (
    <div style={{
      backgroundColor:'black',
      width:'100vw',
      // marginTop:'-103px', 
    }}>
      <BookingForm />
    </div>
  )
}
