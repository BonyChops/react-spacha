import { SpachaProps } from './Spacha/Spacha';
import { SpachaImageProps } from './SpachaImage/SpachaImage';

export type Theme = {
  color: string;
  baseColor: string;
  txtColor: string;
  price: number;
};

export type Themes = {
  [key: string]: Theme;
};

export type ThemeName =
  | 'blue'
  | 'lightblue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'pink'
  | 'red';

export type SpachaBaseProps = {
  price?: number;
  customPriceString?: string;
  message?: string;
  background?: string;
  theme?: ThemeName;
  themeOption?: Theme;
  scale?: number;
  user?: {
    name: string;
    img?: HTMLImageElement;
  };
  imgOption?: {
    square?: boolean;
  };
};

export const themes: Themes = {
  blue: {
    color: '#134a9e',
    baseColor: '#113f85',
    txtColor: 'white',
    price: 0,
  },
  lightblue: {
    color: '#00b8d4',
    baseColor: '#00e5ff',
    txtColor: 'black',
    price: 200,
  },
  green: {
    color: '#00bfa5',
    baseColor: '#1de9b6',
    txtColor: 'black',
    price: 500,
  },
  yellow: {
    color: '#ffb300',
    baseColor: '#ffca28',
    txtColor: 'black',
    price: 1000,
  },
  orange: {
    color: '#e65100',
    baseColor: '#f57c00',
    txtColor: 'black',
    price: 2000,
  },
  pink: {
    color: '#c2185b',
    baseColor: '#e91e63',
    txtColor: 'white',
    price: 5000,
  },
  red: {
    color: '#d00000',
    baseColor: '#e62117',
    txtColor: 'white',
    price: 10000,
  },
};

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export const generatePriceString = (price: number): string => {
  return '￥' + Number(price).toLocaleString();
};

export const themeFromPrice = (price: number): Theme => {
  if (price < 0) {
    return themes.blue;
  }
  return (
    Object.keys(themes)
      .map((key) => themes[key])
      .reverse()
      .find((v) => v.price <= price) ?? themes.blue
  );
};
export const initOptions = (
  options: SpachaBaseProps | SpachaProps | SpachaImageProps
): SpachaBaseProps | SpachaProps | SpachaImageProps => {
  const optionsBuf = { ...options };
  const themeArray = Object.keys(themes).map((key) => ({
    ...themes[key],
    name: key,
  }));
  const randomTheme = themeArray[Math.floor(Math.random() * themeArray.length)];
  optionsBuf.price ??= randomTheme.price;
  console.log(optionsBuf.scale);
  optionsBuf.scale ??= 1.0;
  console.log(optionsBuf.scale);
  //this.options.theme ??= randomTheme.name;
  optionsBuf.themeOption ??= optionsBuf.theme
    ? themes[optionsBuf.theme]
    : themeFromPrice(optionsBuf.price ?? themes.orange.price);
  optionsBuf.user ??= {
    name: 'YouTube User',
  };
  optionsBuf.user.name ??= 'YouTube User';

  return optionsBuf;
};
