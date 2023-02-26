const timeBlocks = document.querySelectorAll('.container-fluid');
const timeBlockRow = document.querySelectorAll('.time-block');

let isPresent;
let isPast;
let isFuture;

const todayDate = moment().format('dddd, MMMM Do');
document.querySelector('#currentDay').textContent = todayDate;

function colorDate() {
  const currentHour = moment().hour();

  timeBlockRow.forEach(function(row) {
    const blockHour = parseInt(row.dataset.time);

    if (currentHour === blockHour) {
      row.classList.add('present');
    } else if (currentHour > blockHour) {
      row.classList.add('past');
    } else {
      row.classList.add('future');
    }
  });
}

colorDate();
