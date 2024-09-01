/**
 * (ss) setCurrent
 * (s) current = current width
 * target = target width
 * difference ...
 * 
 * (const) INCREMENT - will always be added, but obviously treated as a decrement if it's negative
 * 
 * (s) duration = duration that the animation should run
 * (ss) setDuration
 */
export const animateDrawer = (current, setCurrent, target/*, setDrawer*/) => {
    const duration = 400;
    let difference = current - target;
    let increment = ( 10 * Math.abs(difference) ) / duration;

    console.log("diff: " + difference + " = " + current + " - " + target);
    let copy = current;
    // let count = 0;

    // console.log(increment);

    const interval = setInterval(() => {
        // console.log(count);

        if (difference < 0) {
            copy = copy + increment;
            console.log("negative diff");
            console.log(copy);
        } else {
            copy = copy - increment;
            console.log("positive diff");
        }

        setCurrent(copy);

        // ++count;
    }, 10);

    setTimeout(() => {
        clearInterval(interval);
        setCurrent(target);
        // setDrawer(Math.abs(difference));
    }, duration + (duration * 0.6));
}