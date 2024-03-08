import { useEffect } from "react";

export const useChangeTitle = (title: string) => {
  useEffect(() => {
    window.webviewSdkInit = function (WebviewSdk) {
      WebviewSdk.setTitle(title);
    };
    window.WebviewSdk?.setTitle(title);
  }, [title]);
};
