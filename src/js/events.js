import { 
  printTimesFramesDay, 
  printTimesFramesWeek, 
  printTimesFramesMonth 
} from "./data.js";

const day = document.getElementById('day');
const week = document.getElementById('week');
const month = document.getElementById('month');

export const printDay = () => {
  day.addEventListener('click', printTimesFramesDay)
}


export const printweek = () => {
  
  week.addEventListener('click', printTimesFramesWeek)
}

export const printMonth = () => {
  month.addEventListener('click', printTimesFramesMonth)
}
