import BreadcrumbIns from "@/components/shared/BreadcrumbIns"
import icon from "@/assets/images/Vector.jpg"
import NotificationsIns from "./NotificationsIns"
const NotificationsEmptyIns = () => {
  return <>
  <BreadcrumbIns />
  <div className="container flex flex-col justify-center items-center gap-5">
  {localStorage.getItem("token") ? <NotificationsIns /> :<div className="flex flex-col justify-center items-center gap-5"> <img src={icon} className="" alt="" />
    <p className="font-bold">You are all up to date</p>
    <p className="text-gray-500">No new notifications - come back soon</p> </div> 
    }
  </div>
  </>
}

export default NotificationsEmptyIns