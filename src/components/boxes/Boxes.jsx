import BoxOne from "./box-shadow/BoxShadow";
import Buttons from "./buttons/Buttons";
import Shapes from "./shapes/Shapes";
import { Routes, Route } from "react-router-dom";

const Boxes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<BoxOne />} />
        <Route exact path="/buttons" element={<Buttons />} />
        <Route exact path="/shapes" element={<Shapes />} />
      </Routes>
    </div>
  );
};

export default Boxes;
