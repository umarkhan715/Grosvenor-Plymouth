// import { click } from '@testing-library/user-event/dist/click';
import React, { useState} from 'react'
// import React, {useRef, useEffect } from 'react'
import './Persons.css';


function Persons() {



    const [show, setshow] = useState(false);
    // let rooms = 0;
    const [rooms, setrooms] = useState(0)
    const [adults, setadults] = useState(0)
    const [childs, setchilds] = useState(0)

    function IncrementItemrooms(event) {
        event.preventDefault();

        setrooms(rooms + 1);
    }
    function DecreaseItemrooms(event) {
        event.preventDefault();

        if (rooms > 0)
            setrooms(rooms - 1);
    }

    function IncrementItemadults(event) {
        event.preventDefault();

        setadults(adults + 1);
    }
    function DecreaseItemadults(event) {
        event.preventDefault();

        if (adults > 0)
            setadults(adults - 1);
    }

    function IncrementItemchilds(event) {
        event.preventDefault();

        setchilds(childs + 1);
    }
    function DecreaseItemchilds(event) {
        event.preventDefault();
        if (childs > 0) {
            setchilds(childs - 1);
        }
    }
    function ToggleClick(event) {
        event.preventDefault();
        setshow(!show);
    }
    return (
        <>



            <div className='container'>
                <div className='row  label-boxes'>
                    <div className='col-sm-4' onClick={ToggleClick}><label>room {rooms} </label> </div>
                    <div className='col-sm-4' onClick={ToggleClick}><label>adult {adults} </label> </div>
                    <div className='col-sm-4' onClick={ToggleClick}><label>child {childs} </label> </div>
                </div>


            </div>

            <div >
                <div>
                    {show ?
                        <div className='toogle-dropdown-option' id='myDIV'><button onClick={DecreaseItemrooms}>➖</button> Room {rooms} <button onClick={IncrementItemrooms}>➕</button><br />
                            <button onClick={DecreaseItemadults}>➖</button> Adult {adults} <button onClick={IncrementItemadults}>➕</button><br />
                            <button onClick={DecreaseItemchilds}>➖</button> Child {childs} <button onClick={IncrementItemchilds}>➕</button><br />
                            <button className='ok-button' onClick={ToggleClick}>OK</button></div>
                        : ''}
                </div>
            </div>
        </>
    );
}

export default Persons;




