//1
class Secundomer {
    constructor() {
        this.seconds = 0;
        this.isStarted = false;
    }

    setIntervalCallback() {
        this.seconds += 1;
    }

    startTime() {
        setInterval(this.setIntervalCallback.bind(this), 1000)
    }

    getTime() {
        if (this.isStarted) {
            console.log(this.seconds);

        } else {
            console.log('Enabled');
            this.startTime();
            this.isStarted = true;
        }
    }

}

let secundomer = new Secundomer();
secundomer.getTime()
setInterval(function () {
    secundomer.getTime();
}, 1000)


//2
const timer = time => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor((time - minutes * 60));
    let tm = setInterval(function () {

        if ((seconds === 0) && (minutes === 0)) {
            clearInterval(tm);
            console.log('Time end');
            return;
        }

        if (seconds === 0) {
            seconds = 60;
            minutes--;
        }
        return console.log(minutes, ':', --seconds);


    }, 1000);

}

timer(120);







