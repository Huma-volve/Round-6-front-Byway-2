import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { Navigate } from "@/types/instructor-dashboard/types";
import { Link } from "react-router";

const BreadcrumbIns = ({ navigate }: { navigate: Navigate }) => {
  // console.log(navigate)
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className=" pt-5">
          <BreadcrumbItem>
            <BreadcrumbLink href={navigate.to}>
              {navigate.navigateTO}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{navigate.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbIns;
