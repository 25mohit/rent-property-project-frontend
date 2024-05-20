import Link from "next/link";
import { MdClose } from "react-icons/md";

const ToastMessage = () => {
  return (
    <div className="wrapper show toastMessage">
      <div className="toast warning">
        <div className="content">
          <span>No Internet Connection</span>
        </div>
        {/* <button className="closeIcon" type="button"><MdClose /></button> */}
      </div>
    </div>
  )
}

export default ToastMessage