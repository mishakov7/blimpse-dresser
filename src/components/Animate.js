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
    const increment = 0.5;
    let difference = current - target;
    // console.log("difference: " + difference + " = " + current + " - " + target);

    let duration = 100 * ( Math.abs(difference) / ( increment * 10 ) );
    // setDuration(duration);

    if (target > 0 && target < 100) {
        let copy = current;
        let count = 0;

        console.log(duration);

        const interval = setInterval(() => {
            console.log(count);

            if (difference < 0) {
                copy = copy + increment;
            } else {
                copy = copy - increment;
            }

            setCurrent(copy);

            ++count;
        }, 10);

        setTimeout(() => {
            clearInterval(interval);
            // setDrawer(Math.abs(difference));
        }, duration + (duration * 0.6));
    }
}