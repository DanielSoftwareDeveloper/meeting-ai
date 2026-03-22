import { FiAlertTriangle } from "react-icons/fi";

interface Props {
  message?: string;
}

function FormError({ message }: Props) {
  if (!message) return null;

  return (
    <div className="bg-red-100 text-red-700 dark:bg-red-400/10 dark:text-red-300 border-border p-3 rounded-md flex items-center gap-x-2 text-sm mt-4">
      <FiAlertTriangle className="size-4" />
      <p>{message}</p>
    </div>
  );
}
export default FormError;
