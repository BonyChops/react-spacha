import React, { FC, useEffect } from 'react';
import { SpachaBaseProps } from '../define';
import { SpachaImage as SpachaImageCore } from 'spacha';

export type SpachaImageProps = SpachaBaseProps & {
  width?: number;
  height?: number;
  heightAutoFix?: boolean;
  key?: string;
};

export const SpachaImage: FC<SpachaImageProps> = (props) => {
  const id = `spc-canvas${props.key ? `-${props.key}` : ''}`;
  useEffect(() => {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    const canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;
    new SpachaImageCore(canvasContext, props);
  }, [JSON.stringify(props)]);
  return <canvas id={id} width={600}></canvas>;
};
