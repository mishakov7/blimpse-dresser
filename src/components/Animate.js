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
export const animateDrawer = (current, setCurrent, target, ratio) => {
    let duration = 400;
    let difference = current - target;

    // if (difference < 10) {
    //     duration = 200;
    // }

    let increment = ( 10 * Math.abs(difference) ) / duration;

    let copy = current;
    // let count = 0;

    const interval = setInterval(() => {
        // console.log(count);

        if (difference < 0) {
            copy = copy + increment;
        } else {
            copy = copy - increment;
        }

        setCurrent(copy);

        if (copy == target) {
            clearInterval(interval);
            return;
        }
        // ++count;
    }, 10);

}