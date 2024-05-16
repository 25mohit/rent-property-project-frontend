import Splash from "./Splash/page";
import CalculateFontSize from "./components/HOC/Layout/CalculateFontSize";

export default function Home() {
  return (
    <CalculateFontSize>
     <Splash />
    </CalculateFontSize>
  );
}
