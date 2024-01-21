import Image from 'next/image';
import React, { ReactElement } from 'react';

interface IconProps {
  width: number;
  height: number;

}

const Facebook: React.FC<IconProps> = ({ width = 24, height = 24 }): ReactElement => {
  return (
    <Image
    width={width}
    height={height}
    src={"/facebook.png"}
    alt='Facebook'
    
    />
  );
};

export default Facebook;
