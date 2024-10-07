"use client"
import { MdKeyboardArrowUp } from "react-icons/md";
import react,{ useState,useEffect } from "react";

const ScrollToTop = () => {
    const [isVisible,setIsVisible] = useState(false)
    const goToBtn = ()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }

    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",toggleVisibility)
        return () => window.removeEventListener("scroll",toggleVisibility)
    },[])
    
  return (
    <div className={`fixed bottom-10 right-10 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <button className="bg-primary px-3 py-3 custom-hover text-white" onClick={goToBtn}><MdKeyboardArrowUp className="text-3xl"/></button>
    </div>
  )
}

export default ScrollToTop