import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteInterface {
  isAllowed: boolean;
  redirectPath?: string;
}

/**
 * ナビゲーションガード用コンポーネント
 */
export const ProtectedRoute = ({
  isAllowed,
  redirectPath = "/",
}: ProtectedRouteInterface): JSX.Element => {
  if (!isAllowed) {
    // 権限を持たない場合
    // redirectPathへ遷移
    return <Navigate to={redirectPath} replace />;
  }

  // 権限を持つ場合
  // そのまま遷移
  return <Outlet />;
};
