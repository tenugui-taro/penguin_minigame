import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "@/stories/pages/Home/Home";
import { NotFound } from "@/stories/pages/NotFound/NotFound";

/**
 * ルーティング定義用コンポーネント
 */
export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="notfound" element={<NotFound />} />

      <Route path="*" element={<Navigate to="notfound" replace />} />
    </Routes>
  );
};
