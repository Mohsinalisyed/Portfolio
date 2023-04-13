import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notification = (message:string, type:string) => {
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
  }

  switch (type) {
    case 'info':
      toast.info(message, toastOptions)
      break
    case 'success':
      toast.success(message, toastOptions)
      break
    case 'error':
      toast.error(message, toastOptions)
      break
    case 'warning':
      toast.warning(message, toastOptions)
      break
    default:
      toast.success(message, toastOptions)
      break
  }
}
export default notification
