
// This gets the current day and adds it to the website 
let whatsTheDay = dayjs().format('ddd MMM DD, YYYY  h:mm a');
let showDate = document.querySelector('#currentDay');
showDate.textContent = whatsTheDay

$(document).ready(function () {
  
// this gets the event and hour and saves it to local storage when the save button is clicked. 
  $('.saveBtn').on('click', function(){
    let event = $(this).siblings('.description').val();
    let hour = $(this).parent().attr('id');

    localStorage.setItem(hour, event);
  });
  
// This updates the color of the hour block to match it with the right style class depending on the time. 
  function updateColor() {
    let theHourIs = dayjs().hour();

    $('.time-block').each(function (){
      let idHour = parseInt($(this).attr('id').split('-')[1]);

      if (idHour < theHourIs){
        $(this).addClass('past');
      } else if (idHour === theHourIs) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  updateColor();

  //This gets anything that was saved in local storage and displays it on the website
function recallEvent() {
  
  $('.time-block').each(function () {
    let blockId = $(this).attr('id');
    $(this).children('.description').val(localStorage.getItem(blockId));
  });
};

recallEvent();

});
