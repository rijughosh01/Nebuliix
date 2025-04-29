import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useNavigate();
    const [loading, setLoading] = useState(true);

    const isAuthenticated = () => {
      return !!localStorage.getItem("token");
    };

    useEffect(() => {
      if (!isAuthenticated()) {
        router("/auth");
      } else {
        setLoading(false);
      }
    }, []);

    if (loading) return <div>Loading...</div>; // Show loading state

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
