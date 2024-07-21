const datosJson  = '../data.json';

let h4 = document.querySelectorAll('h4');

export const dataTitle = () => {
  fetch(datosJson)
    .then(resp => resp.json())
    .then(data => {
      data.forEach((datos, index) => {
      h4[index].textContent = `${datos.title}`
    });
  })
    .catch((err) => {
     console.log('Error Not Found')
  })
}    
dataTitle()



const currentTime = document.querySelectorAll('.date');

export const printTimesFramesDay = () => {
  
  fetch(datosJson)
    .then(resp => resp.json())
    .then(data => {
      data.forEach((item, index) => {
        let currentHour = currentTime[index].firstElementChild.firstElementChild;
        currentHour.textContent = `${item.timeframes.daily.current}`
        let lastTime = currentTime[index].lastElementChild.lastElementChild;
        lastTime.textContent = `${item.timeframes.daily.previous}`
      })
    })  
  
}


export const printTimesFramesWeek = () => {
  
  fetch(datosJson)
    .then(resp => resp.json())
    .then(data => {
      data.forEach((item, index) => {
        let currentHour = currentTime[index].firstElementChild.firstElementChild;
        currentHour.textContent = `${item.timeframes.weekly.current}`
        let lastTime = currentTime[index].lastElementChild.lastElementChild;
        lastTime.textContent = `${item.timeframes.weekly.previous}`
      })
    })  
  
}

export const printTimesFramesMonth = () => {
  
  fetch(datosJson)
    .then(resp => resp.json())
    .then(data => {
      data.forEach((item, index) => {
        let currentHour = currentTime[index].firstElementChild.firstElementChild;
        currentHour.textContent = `${item.timeframes.monthly.current}`
        let lastTime = currentTime[index].lastElementChild.lastElementChild;
        lastTime.textContent = `${item.timeframes.monthly.previous}`
      })
    })  
  
}