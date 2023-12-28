import {observer} from "mobx-react"
import { useEffect } from "react";
import Appointment from "../../store/Appointment";
import Meeting from "../meeting/Meeting";
const Meetings=(observer(()=>{
    useEffect(() => {
        Appointment.addMeeting(Appointment.meetingsList)
        Appointment.getMeeting();
      },[])
      console.log('meetings')
return(
    <>
  <div>
      {Appointment.meetingsList.map((meeting, index) => (
        <Meeting key={index} meeting={meeting} />
      ))}
    </div>
    </>
)

}))
export default Meetings