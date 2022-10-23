import Home from "./Home";
import { Routes, Route, Navigate } from "react-router";
import Rooms from "./Rooms/Rooms";
import Summary from "./checkout/Summary";
const Body = props => {
    return (
        <div>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/summary" element={<Summary />} />
            </Routes>
        </div>
    )
}
export default Body;