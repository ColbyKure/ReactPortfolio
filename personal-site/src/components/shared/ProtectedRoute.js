import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return children;
};

export default ProtectedRoute;
