import { useEffect } from "react"
import { defaultAxiosInstance } from "../../libs/axios/instance";

const Messenger = () => {
  useEffect(() => {
    console.log("useEffect")
    const fetchData = async () => {
      try {
        const res = await defaultAxiosInstance.get("users");
        alert(JSON.stringify(res));
      }
      catch {
        alert("Error Error");
      }
    }
    fetchData();
  }, [])
  return (
    <div>Messenger</div>
  )
}

export default Messenger;