import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Link } from "react-router"

  
  const BreadcrumbIns = () => {
    return <>
    <Breadcrumb>
  <BreadcrumbList className=" pt-5">
    <BreadcrumbItem>
    <Link to={"/"}>
      <BreadcrumbLink>Home</BreadcrumbLink>
    </Link>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink>Notifications</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
    </>
  }
  
  export default BreadcrumbIns