import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";

const HeaderBar = () => {
  return (
    <>
      <div className="headerBar">
        <div className="col leftMenu">
          <button className="btn menuBtn"><MdMenu /></button>
          <div className="location">
            <GoLocation className="icon" />
            <div className="locationBody">
              <h5>Location
                <FaAngleDown className="arrow" /></h5>
              <p>Jhothawara, Jaipur, 302020
              </p>
            </div>
          </div>
        </div>
        <div className="col rightMenu">
          <ul className="headerAction">
            <li><button className="btn search"><FiSearch /></button></li>
            <li><button className="btn notification"><MdNotificationsNone /></button></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default HeaderBar