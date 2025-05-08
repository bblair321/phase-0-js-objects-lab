//Write your code here
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
}

function logAttendeeName(attendee){
  return console.log(attendee.name);
}

function logTicketPrice(attendee){
  return console.log(attendee.ticketPrice);
}

function updateTicketType(attendee, newticketType){
  attendee.ticketType = newticketType;
}

function removeEventProperty(attendee){
  delete attendee.event;
  return attendee;
}

function addCheckedInProperty(attendee){
  attendee.checkedIn = true;
  return attendee;
}

function updateTicketPrice(attendee, newticketPrice){
  attendee.ticketPrice = newticketPrice;
}
//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};