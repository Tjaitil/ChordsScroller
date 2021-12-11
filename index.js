// Get smooth scrolling
window.addEventListener("onload", () => document.documentElement.style.scrollBehavior = "smooth");

window.addEventListener("keypress", (event) => {
    // Pause scroll when pressing space
    if(event.keyCode === 32) {
        // Prevent default sroll behavior with space
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
        // Set speed
        if(speed) {
            this.speed = speed;
        }
        this.intervalID = window.requestAnimationFrame(() => this.animate());
    },
    animate() {
        // Speed control
        if(this.duration % this.speed === 0) {
            // Scroll Y is moved 1px
            window.scrollTo(0, document.documentElement.scrollTop += 1);
        }
        this.duration++;
        this.intervalID = window.requestAnimationFrame(() => this.animate());
    },
    unset() {
        cancelAnimationFrame(this.intervalID);
    },
    togglePause() {
        // Togglepause
        if(!this.pause) {
            this.unset();
        } else {
            this.set()
        }
        this.pause = !this.pause;
    }
}