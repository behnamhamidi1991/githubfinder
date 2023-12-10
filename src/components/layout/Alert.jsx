import { useContext } from "react";
import AlertContext from "../../Context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2 bg-red-500 w-fit px-2 rounded-xl">
        {alert.type === "error" && (
          <p className="flex-1 text-base font-semibold leading-7 text-white">
            <strong>{alert.msg}</strong>
          </p>
        )}
      </p>
    )
  );
}

export default Alert;
