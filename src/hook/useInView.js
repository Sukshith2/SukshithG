import { useEffect, useRef, useState } from "react";

export default function useInView(threshold = 0.15){
    const ref = useRef(null);
    const [inView, setInview] = useState(false);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=> {
                if(entry.isIntersecting) setInview(true);},
                {threshold});
        if(ref.current) observer.observe(ref.current);
        return ()=> observer.disconnect();
    }, [threshold]);
    return[ref, inView];
}