import { useEffect } from "react";

export const useChangeTitle = (title: string) => {
  useEffect(() => {
    // if (window?.webviewSdkInit) {
    //   window.webviewSdkInit = function (WebviewSdk) {
    // window.WebviewSdk?.setTitle(title);
    //   };
    // }
    // window?.WebviewSdk?.setTitle(title);
  }, []);
};
