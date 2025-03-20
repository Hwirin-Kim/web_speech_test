import { useState, useEffect } from "react";

function useCheckDevice() {
  const [browserInfo, setBrowserInfo] = useState<string>("");
  const [deviceType, setDeviceType] = useState<string>("Unknown Device");

  useEffect(() => {
    function getBrowserInfo() {
      const userAgent = navigator.userAgent;
      setBrowserInfo(userAgent);
    }
    function detectDeviceType() {
      const userAgent = navigator.userAgent.toLowerCase();
      if (/windows nt/.test(userAgent)) {
        setDeviceType("Windows");
      } else if (/macintosh|mac os x/.test(userAgent)) {
        setDeviceType("Mac");
      } else if (/android/.test(userAgent)) {
        setDeviceType("Android");
      } else if (/iphone|ipad|ipod/.test(userAgent)) {
        setDeviceType("iOS");
      } else if (/linux/.test(userAgent)) {
        setDeviceType("Linux");
      } else {
        setDeviceType("Unknown Device");
      }
    }

    getBrowserInfo();
    detectDeviceType();
  }, []);

  return { browserInfo, deviceType };
}

export default useCheckDevice;
