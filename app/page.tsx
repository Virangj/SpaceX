import { BackgroundLinesDemo } from "./Components/Background";
import { NavbarDemo } from "./Components/Navbar";
import { StickyScrollRevealDemo } from "./Components/Sticky_Scroll";

export default function (){
  return (
    <div className="h-screen overflow-auto no-scrollbar">
      <NavbarDemo />
      <BackgroundLinesDemo />
      <StickyScrollRevealDemo />
    </div>
  )
}