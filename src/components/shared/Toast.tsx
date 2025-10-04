import { FaCheckDouble } from "react-icons/fa";

const Toast = () => {
  return <>
  

<div id="toast-interactive" className="w-full max-w-xs p-4 text-gray-500 bg-green-500 rounded-lg shadow-sm dark:bg-gray-800 dark:text-gray-400" role="alert">
    <div className="flex">
        <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
            <FaCheckDouble />
            <span className="sr-only">Refresh icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">
            <span className="mb-1 text-lg font-bold text-white dark:text-white">Thanks This Transaction is Successful</span>
        </div>

    </div>
</div>


  </>
}

export default Toast