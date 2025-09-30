import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import view from "@/assets/images/View 👁.png";
  import { useDispatch, useSelector } from "react-redux";
  import type { RootState } from "@/store/Store";
  import { setStatus } from "@/store/userManagment/UserManagment";
import { NavLink } from "react-router";
  
  const DropDown = ({ userId }: { userId: number }) => {
    const user = useSelector((state: RootState) =>
      state.managment.users.find((u) => u.id === userId)
    );
    const dispatch = useDispatch();
  
    if (!user) return null;
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img src={view} alt="view" className="cursor-pointer" />
        </DropdownMenuTrigger>
  
        <DropdownMenuContent className="font-bold p-2 min-w-[150px]">
          <DropdownMenuItem className="text-green-500 text-center">
            <NavLink to={`/userProfile`}>
            View Profile
            </NavLink>
          </DropdownMenuItem>
  
          {user.status === "Active" ? (
            <DropdownMenuItem
              onClick={() => dispatch(setStatus({ id: user.id, status: "Blocked" }))}
              className="text-center text-red-500"
            >
              Block
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem
              onClick={() => dispatch(setStatus({ id: user.id, status: "Active" }))}
              className="text-center text-green-500"
            >
              Activate
            </DropdownMenuItem>
          )}
  
          <DropdownMenuItem className="text-center text-red-500">
            Delete User
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  
  export default DropDown;
  