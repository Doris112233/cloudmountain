import { useEffect } from "react";
import { useLoading } from "./LoadingContext";
import { history } from "@umijs/max";

export const useNavigationLoading = () => {
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    const unlisten = history.listen(() => {
      showLoading();

      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        hideLoading();
      }, 500);
    });

    return () => {
      if (hideTimer) clearTimeout(hideTimer);
      unlisten();
    };
  }, [showLoading, hideLoading]);
};
