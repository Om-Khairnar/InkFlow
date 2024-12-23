import axios from "axios";
import { useEffect } from "react";

const Users = () => {
  const[user,SetUser] = useState([]);

  useEffect(()=>{
    axios.get('https://localhost:8000/')
  })
  return (
    <div>

    </div>
  );
};

export default Users;
