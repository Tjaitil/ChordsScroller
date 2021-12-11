// Get smooth scrolling
window.addEventListener("onload", () => document.documentElement.style.scrollBehavior = "smooth");

window.addEventListener("keypress", (event) => {
    if(event.keyCode === 32) {
        event.preventDefault();
        scroller.togglePause(); 
    } 
});
const scroller = {
    intervalID: null,
    speed: 1,
    duration: 0,
    pause: false,
    set(speed = false) {
        if(speed) {
            this.speed = speed;
        }
        this.intervalID = window.requestAnimationFrame(() => this.animate());
    },
    animate() {
        if(this.duration % this.speed === 0) {
            window.scrollTo(0, document.documentElement.scrollTop += 1);
        }
        this.duration++;
        this.intervalID = window.requestAnimationFrame(() => this.animate());
    },
    unset() {
        cancelAnimationFrame(this.intervalID);
    },
    togglePause() {
        if(!this.pause) {
            this.unset();
        } else {
            this.set()
        }
        this.pause = !this.pause;
    }
}