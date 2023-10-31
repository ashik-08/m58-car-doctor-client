import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    axiosSecure.interceptors.response.use((res) => {
      return res;
    });
    (error) => {
      console.log("Error tracked in interceptor", error.response);
      if (error.response.status === 401 || error.response.status === 403) {
        console.log("logout the user");
        logOut()
          .then(() => {
            console.log("user logged out");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };
  }, [logOut]);
  return axiosSecure;
};

export default useAxiosSecure;
