import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import FullScreenLoader from "../components/FullScreenLoader";
import { userApi } from "../redux/api/userApi";

type IAuthMiddleware = {
  children: React.ReactElement;
};

const AuthMiddleware: React.FC<IAuthMiddleware> = ({ children }) => {
  const [cookies] = useCookies(["logged_in"]);
  const navigate = useNavigate();

  const { isLoading, data } = userApi.endpoints.getMe.useQuery(null, {
    skip: !cookies.logged_in,
  });
  useEffect(() => {
    if (data?.status === "block") {
      navigate("/login");
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }}, [data])
  
  if (isLoading) {
    return <FullScreenLoader />;
  }

  return children;
};

export default AuthMiddleware;
