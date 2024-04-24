import {useEffect} from "react";
import ScrollReveal from "scrollreveal";

export default function Scroll({ delay, distance, easing, origin, duration }) {
    useEffect(() => {
        const sr = ScrollReveal({
            delay: delay || 400,
            distance: distance || "60px",
            easing: easing || "ease-out",
            origin: origin || "left",
            duration: duration || 1500,
    });
}, [delay, distance, easing, origin, duration]);
}

