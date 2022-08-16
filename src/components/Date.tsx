import {
  DateInput,
  FormSchema,
  GuestSelect,
  GuestOption,
  useReactBookingForm,
  BookingForm as BookingFormType,
} from "react-booking-form"
import tw from "tailwind-styled-components"
import moment from "moment"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt"
import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner"
import { FaPlus } from "@react-icons/all-files/fa/FaPlus"
import { FaMinus } from "@react-icons/all-files/fa/FaMinus"
import { FaUser } from "@react-icons/all-files/fa/FaUser"
// import { IoMdSwap } from "@react-icons/all-files/io/IoMdSwap"
import React, { useState, useEffect } from "react"
import './Date.css'
import logo from '../images/logo.png'
// import { getValue } from "@mui/system"
// import { parseJSON } from "date-fns"
import { URLSearchParams } from "url"
// import { toDate } from "date-fns"

// const Container = tw.div`z-20 absolute bg-white p-0 shadow-xl flex justify-between flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-2 border border-gray-300`
const InputCore = tw.input`md:rounded-full bg-white rounded-3 relative w-full peer flex h-10 focus:outline-none appearance-none border border-gray-300 rounded-full outline-none transition pl-4 pr-6 group-hover:border-orange-500 focus:border-orange-5000 cursor-pointer`
const InputContainer = tw.div`md:rounded-full rounded-xl relative w-full md:w-1/3 flex flex-col justify-center items-center pl-4`
const Label = tw.div`md:rounded-full  rounded-xl text-sm w-full font-bold mb-1 text-gray-500`

const ButtonCore = tw.button`appearance-none h-10 rounded-3 w-75 flex justify-center items-center font-bold px-3`
// const SwapButton = tw(ButtonCore)`md:mt-5 border md:w-full border-gray-300 hover:border-orange-500 hover:text-orange-500 focus:border-orange-500focus:text-orange-500 transition outline-none`

const PrimaryButton = tw(ButtonCore)`
border-0 bg-orange-500 text-white uppercase`
const GuestOkButton = tw(PrimaryButton)`mx-auto w-5/6 mb-2 bg-orange-500`
const SearchButton = tw(PrimaryButton)`w-full mt-4 bg-orange-500 `
const IconContainer = tw.a`z-20 absolute top-0 right-0 bottom-0 h-full flex items-center pr-2 cursor-pointer group-hover:text-orange-500 peer-focus:text-orange-500 text-gray-500 transition`

const MenuContainer = tw.div`z-20`
const Menu = tw.ul<{ open: boolean }>`
  w-30 max-h-[540px] border z-20 shadow-lg transform transition ease-in-out bg-white rounded-3xl overflow-y-hidden overflow-x-hidden
  ${({ open }) => (open ? "" : "opacity-0 -translate-y-4 pointer-events-none")}
`
const Text = tw.p`text-lg font-bold text-gray-700 font-title mt-3`
const SmallText = tw.p`text-sm text-gray-500 `

const OptionBase = tw.div`transition ease-in-out relative py-3 px-20`
// const OptionContainer = tw(OptionBase) <{
//   $active?: boolean
//   $selected?: boolean
// }>`cursor-pointer transition ${({ $active, $selected }) =>
//   $active || $selected ? "bg-orange-100" : ""}`
const GuestButton = tw.button` appearance-none rounded-full p-2 flex items-center justify-center h-full overflow-hidden border border-gray-500 text-gray-500 hover:text-white hover:bg-orange-500 hover:border-transparent transition ease-in-out disabled:opacity-50`

type InputProps = {
  form?: BookingFormType
  isLoading?: boolean
  name?: string
  containerRef?: React.RefObject<HTMLDivElement>
}

const iconsList = {
  location: FaMapMarkerAlt,
  date: FaCalendarAlt,
  peopleCount: FaUser
}

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ isLoading, containerRef, form, name, ...props }, ref) => {
    const itemType = name && form?.formSchema[name].type
    const InputIcon = isLoading ? FaSpinner : iconsList[itemType || "location"]

    return (
      <div className="relative w-full group" ref={containerRef}>
        <InputCore data-input ref={ref} name={name} {...props} />
        <IconContainer title="toggle" data-toggle>
          <InputIcon className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
        </IconContainer>
      </div>
    )
  }
)

const GuestOptionComponent = ({
  form,
  name,
  option
}: {
  form: BookingFormType
  name: string
  option: GuestOption
}) => (
  <OptionBase className="flex items-center justify-between">
    <div>
      <Text>{option.label}</Text>
      <SmallText>{option.description}</SmallText>
    </div>
    <div className="flex items-center justify-center gap-x-4 ml-10">
      <GuestButton
        onClick={form.onPlusClick(option, name)}
        disabled={form.getIsOptionDisabled(option, "plus")}
      >
        <FaPlus className="w-5 h-5" />
      </GuestButton>
      <Text>{option.value}</Text>
      <GuestButton
        onClick={form.onMinusClick(option, name)}
        disabled={form.getIsOptionDisabled(option, "minus")}
      >
        <FaMinus className="w-5 h-5" />
      </GuestButton>
    </div>
  </OptionBase>
)



const dateConfig = {
  altInput: true,
  altFormat: "M j, Y",
  dateFormat: "YYYY-MM-DD",
  wrap: true
}

const formSchema: FormSchema = {

  checkIn: {
    type: "date",
    focusOnNext: "checkOut",
    options: { ...dateConfig, minDate: "today" }
  },
  checkOut: {
    type: "date",
    focusOnNext: "persons",
    options: { ...dateConfig, minDateFrom: "checkIn" }
  },
  persons: {
    type: "peopleCount",
    defaultValue: [
      {
        name: "adults",
        label: "Adults",
        description: "Ages 13+",
        value: 1,
        min: 0,
        max: 10
      },
      {
        name: "children",
        label: "Children",
        description: "Ages 4-12",
        value: 0,
        min: 0,
        max: 10
      },
      {
        name: "guests",
        label: "guests",
        description: "Ages 13+",
        value: 0,
        min: 0,
        max: 10
      }
    ]
  }
}

export const BookingForm = () => {
  const form = useReactBookingForm({ formSchema })



  const onBookButtonClick = () => {
    const config = {
      convertDate: (dateValue: Date) => moment(dateValue).format("MM-DD-YYYY")
    }

    // const Adults = formSchema.persons.defaultValue[0].value;
    // const Childs = formSchema.persons.defaultValue[1].value;
    // const Guests = formSchema.persons.defaultValue[2].value;

    var Adults;
    var Childs;
    var Guests;

    // console.log(form.formSchema.checkIn);

    let mykeyValues = form.serializeToURLParams(config);
    mykeyValues = mykeyValues.toString();
    const Limit = mykeyValues.length;
    let Date1 = '';
    let Date2 = '';
    for (let i = 0; i <= Limit; i++) {
      if (i > 7 && i < 18) {
        Date1 += mykeyValues[i];
      }
      else if (i > 27 && i < 38) {
        Date2 += mykeyValues[i];
      }
      else if (i === 54) {
        Adults = mykeyValues[i];
      }
      else if (i === 73) {
        Childs = mykeyValues[i];
      }
      else if (i === Limit - 1) {
        Guests = mykeyValues[i];
      }
    }
    //   for(let i = 0 ; i <= Limit; i++){

    // }

    let CheckIn = new Date(Date1);
    let CheckOut = new Date(Date2);
    const TotalPersons = 30 - (30 - Adults - Childs - Guests);
    console.log("ChecK-in-Date  : ", CheckIn);
    console.log("ChecK-Out-Date : ", CheckOut);
    console.log("Perosns :", TotalPersons);
    console.log("Adults :", Adults);
    console.log("Children :", Childs);
    console.log("Guests :", Guests);


    // alert(form.serializeToURLParams(config))

  }

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(true);
      } else { // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);




  return (
    <nav className={`showNavbar ${show && 'hideNavbar '}`} style={{position:'relative', zIndex:1000}}>
      <div className="container-fluid form-bg-container">
        {/* <Container style={{
        position: 'relative',
        zIndex: '9999'
      }}> */}
        {/* <img src="https://cdn.hotels.uk.com/logo/114028/07415a794f3c3f6ae9b8b0146787d57f/NULL/130/c/b78e6d32ebf7cd64e1ad3503545941fc.jpg"
          style={{
            height: '100px'
          }}
        /> */}
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-3 logo-header">
            <img src={logo} alt='grosvenor-logo'
              style={{
                height: '80px'
              }} />
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2">
            <InputContainer style={{
              width: '95%',
            }}>
              <Label>{"Check in"}</Label>
              <DateInput
                inputComponent={InputComponent}
                className="w-full"
                placeholder="Check In"
                form={form}
                name="checkIn"

              />
            </InputContainer>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2">
            <InputContainer style={{
              width: '95%'
            }}>
              <Label>{"Check out"}</Label>
              <DateInput
                inputComponent={InputComponent}
                className="w-full"
                placeholder="Check Out"
                form={form}
                name="checkOut"
              />
            </InputContainer>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2">
            <InputContainer style={{
              width: '95%'
            }}>
              <Label>{"Persons"}</Label>
              <GuestSelect
                form={form}
                menuContainer={MenuContainer}
                menu={Menu}
                inputComponent={InputComponent}
                option={GuestOptionComponent}
                okButton={GuestOkButton}
                okText="Ok!"
                placeholder="Add persons"
                name={"persons"}
              />
            </InputContainer>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2">
            <InputContainer style={{
              width: '95%'
            }}>
              <SearchButton className='search-Button' onClick={onBookButtonClick}>{"Check Availability"}</SearchButton>
            </InputContainer></div>
        </div>
        {/* </Container> */}
      </div>
    </nav>










  )
}
