
function customSetInterval(callback, interval) {
    const wrapper = () => {
        callback();
        setTimeout(wrapper, interval);
    };
  
    setTimeout(wrapper, interval);
  }

//это первое 1
  
  
  
  function printArrayElements(arr) {
    let index = 0;
  
    const printNextElement = () => {
        if (index < arr.length) {
            console.log(arr[index]);
            index++;
            setTimeout(printNextElement, 1000);
        }
    };
  
    printNextElement();
  }
  
  //это второе 2
  
  function countdownTimer(interval, startNumber) {
    let currentNumber = startNumber;
  
    const countDown = () => {
        if (currentNumber >= 0) {
            console.log(currentNumber);
            currentNumber--;
            setTimeout(countDown, interval * 1000);
        }
    };
  
    countDown();
  }
  
  //это третье 3
  
  
  function setAlarm(time) {
    const timeRegex = /^([0-9]{2}):([0-9]{2}):([0-9]{2})$/;
  
    if (!time.match(timeRegex)) {
        console.error('Некорректный формат времени.Используйте ЧЧ:ММ:СС.');
        return;
    }
  
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const alarmTime = new Date();
    alarmTime.setHours(hours, minutes, seconds, 0);
  
    const currentTime = new Date();
  
    if (alarmTime <= currentTime) {
        console.error('Время будильника уже прошло.');
        return;
    }
  
    const timeDifference = alarmTime - currentTime;
  
    setTimeout(() => {
        console.log('Время для будильника');
    }, timeDifference);
  }

  //это четвертое 4