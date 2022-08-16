// import "./styles.css"
import { BookingForm } from "./Date.tsx"
import "flatpickr/dist/themes/material_orange.css"

export default function App() {
  return (
    <div style={{
      backgroundColor:'white',
      width:'100vw',
      marginTop:'-103px',
      position:'relative',
      zIndex:-1
    }}>
      <BookingForm />
    </div>
  )
}
