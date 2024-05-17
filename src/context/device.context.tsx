import useWindow from "src/hooks/window.hook";
import { FC, createContext, useContext, useMemo } from "react";
import { MAX_MOBILE_WIDTH } from "src/constants/device.constants";
import { IProviderProps } from "src/interfaces/provider-props.interface";

interface IDeviceContext {
  width: number;
  height: number;
  isMobile: boolean;
}

export const DeviceContext = createContext<IDeviceContext>({
  width: window.innerWidth,
  height: window.innerHeight,
  isMobile: window.innerWidth < MAX_MOBILE_WIDTH,
});

export const useDeviceContext = () => useContext(DeviceContext);

const DeviceContextProvider: FC<IProviderProps> = ({ children }) => {
  const { width, height } = useWindow();

  const isMobile = useMemo(() => {
    return width < MAX_MOBILE_WIDTH;
  }, [width]);

  return (
    <DeviceContext.Provider value={{ width, height, isMobile }}>{children}</DeviceContext.Provider>
  );
};

export default DeviceContextProvider;
