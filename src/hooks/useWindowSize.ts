import { useCallback, useLayoutEffect, useState } from 'react';

type Size = {
  width: number;
  height: number;
};

export const useWindowSize = () => {
  const [size, setSize] = useState<Size>({
    width: window?.innerWidth,
    height: window?.innerHeight,
  });

  const updateSize = useCallback(() => {
    setSize({ width: window?.innerWidth, height: window?.innerHeight });
  }, []);

  useLayoutEffect(() => {
    window?.addEventListener('load', updateSize);
    window?.addEventListener('resize', updateSize);

    return () => {
      window?.addEventListener('load', updateSize);
      window?.removeEventListener('resize', updateSize);
    };
  }, [updateSize]);

  return size;
};
