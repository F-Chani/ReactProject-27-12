import {observer} from "mobx-react"
// import Appointment from "../../store/Appointment";
const Meeting=(observer(({meeting})=>{
    console.log('Single meeting')
return(
    <>
    <div>

      <p>Service Name: {meeting.serviceName}</p>
      <p>Service Description: {meeting.serviceDescribtion}</p>
      <p>Service Price: {meeting.servicePrice}</p>
      <p>Date and Time: {meeting.dateTime}</p>
      <p>Client Name: {meeting.clientName}</p>
      <p>Client Phone: {meeting.clientPhone}</p>
      <p>Client Email: {meeting.clientEmail}</p>
      {/* כאן תוכל להוסיף את התצוגה של שאר פרטי הפגישה */}
    </div>

    </>
)

}))
export default Meeting