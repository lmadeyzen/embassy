interface WebviewSDK {
  close: () => void;
  setTitle: (title: string) => void;
}

export declare global {
  interface Window {
    WebviewSdk: WebviewSDK;
    webviewSdkInit: (WebviewSdk) => void;
  }
}
