import { 
  printTimesFramesDay, 
  printTimesFramesWeek, 
  printTimesFramesMonth 
} from "./data.js";

const day = document.getElementById('day');
const week = document.getElementById('week');
const month = document.getElementById('month');

export const printDay = () => {
  day.addEventListener('click', () =>{

    printTimesFramesDay()
    if(week.classList.contains('selected')){
      week.classList.remove('selected')
    }
  })
  
}


export const printweek = () => {
  
  week.addEventListener('click', () =>{ 

    printTimesFramesWeek()
})
}

export const printMonth = () => {
  month.addEventListener('click', ()  => {
    printTimesFramesMonth()
    if(week.classList.contains('selected')){
      week.classList.remove('selected')
    }
  })
}
