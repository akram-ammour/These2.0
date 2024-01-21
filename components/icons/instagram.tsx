import Image from 'next/image';
import React, { ReactElement } from 'react';

interface IconProps {
  width: number;
  height: number;

}

const Instagram: React.FC<IconProps> = ({ width = 24, height = 24 }): ReactElement => {
  return (
    <Image
    width={width}
    height={height}
    src={"/instagram.png"}
    alt='Instagram'
    
    />
  );
};

export default Instagram;
