import React, { VFC } from 'react';
import { SpachaBaseProps } from '../define';

export type SpachaImageProps = SpachaBaseProps &  {
    width?: number;
    height?: number;
    heightAutoFix?: boolean;

};