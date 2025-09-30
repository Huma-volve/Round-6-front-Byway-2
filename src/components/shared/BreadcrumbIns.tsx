import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import type { Navigate } from "@/types/types"
import { Link } from "react-router"

  
  const BreadcrumbIns = ({navigate} : { navigate: Navigate }) => {
    console.log(navigate)
    return <>
    <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
    <Link to={navigate.to}>
      <BreadcrumbLink>{navigate.navigateTO}</BreadcrumbLink>
    </Link>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink>{navigate.name}</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
    </>
  }
  
  export default BreadcrumbIns