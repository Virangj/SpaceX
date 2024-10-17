import { BackgroundLinesDemo } from "./Components/Background";
import { FocusCardsDemo } from "./Components/FocusCard";
import { NavbarDemo } from "./Components/Navbar";
import { StickyScrollRevealDemo } from "./Components/Sticky_Scroll";
import { TimelineDemo } from "./Components/TimeLine";

export default function (){
  return (
    <div className="h-screen overflow-auto no-scrollbar">
      <NavbarDemo />
      <BackgroundLinesDemo />
      <StickyScrollRevealDemo />
      <TimelineDemo />
      <div className="bg-black py-20">
        <h1 className="text-slate-500 font-bold flex justify-start pl-[25%] pb-20 text-7xl">Upcoming Events</h1>
        <FocusCardsDemo />
      </div>
    </div>
  )
}