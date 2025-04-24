import { BackgroundLinesDemo } from "./Components/Background";
import { FocusCardsDemo } from "./Components/FocusCard";
import { StickyScrollRevealDemo } from "./Components/Sticky_Scroll";
import { AnimatedTestimonialsDemo } from "./Components/Testimonials";
import { TimelineDemo } from "./Components/TimeLine";

// Named function and display name set
const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden scrollbar-hide">
      <BackgroundLinesDemo />
      <StickyScrollRevealDemo />
      <TimelineDemo />
      <div className="bg-black py-20">
        <h1 className="text-slate-500 font-bold flex justify-start pl-[25%] pb-20 text-7xl">Upcoming Events</h1>
        <FocusCardsDemo />
        <h1 className="text-slate-500 font-bold flex justify-start pl-[25%] pb-20 text-7xl pt-20">Testimonials</h1>
        <AnimatedTestimonialsDemo />
      </div>
    </div>
  );
};

// Explicitly setting displayName
App.displayName = "App";

export default App;
