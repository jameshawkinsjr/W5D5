class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes(); 
    this.seconds = date.getSeconds();
    this.printTime();
    const clockTick = this._tick.bind(this)
    window.setInterval(clockTick, 1000);
  }
  
  printTime() {
    let time =  `${this.hours} : ${this.minutes} : ${this.seconds}` ;
    console.log(time);
  }

  _tick() {
    this.seconds++ ;
    this.printTime();
  }

}

const clock = new Clock();
const clock2 = new Clock();