document.getElementById('add-event-btn').addEventListener('click', addEvent);

function addEvent() {
  const eventName = document.getElementById('event-name').value;
  const eventTime = document.getElementById('event-time').value;
  
  if(eventName && eventTime) {
    const eventDateTime = new Date(eventTime);
    const eventDiv = document.createElement('div');
    eventDiv.textContent = `${eventName} - ${eventDateTime.toLocaleString()}`⁠;
    document.getElementById('calendar').appendChild(eventDiv);
    document.getElementById('event-name').value = '';
    document.getElementById('event-time').value = '';
  } else {
    alert('Please fill in event name and time.');
  }
}