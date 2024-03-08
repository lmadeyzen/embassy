import { useEffect } from "react";

export const useChangeTitle = (title: string) => {
  useEffect(() => {
    if (window?.webviewSdkInit) {
      window.webviewSdkInit = function (WebviewSdk) {
        WebviewSdk?.setTitle(title);
      };
    }
    window?.WebviewSdk?.setTitle(title);
  }, [title]);
};
