import React, { FC, useEffect, useState } from 'react';
import {
  generatePriceString,
  initOptions,
  SpachaBaseProps,
  themes,
} from '../define';

export type SpachaProps = SpachaBaseProps & {
  shaddow?: boolean;
};

export const Spacha: FC<SpachaProps> = (props) => {
  const [options, setOptions]: [options: SpachaProps, setOptions: any] =
    useState({});
  const [ready, setReady] = useState(false);
  const scale = options?.scale ?? 1;
  const upper = Boolean(props.message);

  const r = 20 * scale;
  const pw = 30 * scale;
  const ph = 20 * scale;

  useEffect(() => {
    setOptions(initOptions(props));
    setReady(true);
  }, [JSON.stringify(props)]);
  return ready ? (
    <div className="spc">
      <div
        className="spc-upper-div"
        style={{
          width: '100%',
          height: `${150 * scale}px`,
          display: 'inline-flex',
          boxSizing: 'border-box',
          borderRadius: upper ? `${r}px ${r}px 0px 0px` : `${r}px`,
          paddingLeft: `${pw}px`,
          paddingRight: `${pw}px`,
          paddingTop: `${ph}px`,
          paddingBottom: `${ph}px`,
          backgroundColor: options.themeOption?.color ?? themes.blue.color,
        }}
      >
        <div
          className="spc-icon-div"
          style={{
            width: `${110 * scale}px`,
            height: `${110 * scale}px`,
          }}
        >
          <img
            width={110 * scale}
            height={110 * scale}
            src={options.user?.img?.src}
            style={{
              backgroundColor: options.user?.img?.src ? 'transparent' : 'black',
              borderRadius: `${
                !options.imgOption?.square ? (110 * scale) / 2 : 0
              }px`,
            }}
          />
        </div>
        <div
          className="spc-profile-div"
          style={{
            paddingLeft: `${10 * scale}px`,
          }}
        >
          <p
            style={{
              color: options.themeOption?.txtColor,
              opacity: 0.7,
              marginTop: '10px',
              marginBottom: '0px',
              font: `${20 * scale}px 'sans-serif'`,
            }}
          >
            {options.user?.name}
          </p>
          <p
            style={{
              color: options.themeOption?.txtColor,
              marginTop: '0px',
              font: `${50 * scale}px 'sans-serif'`,
            }}
          >
            {options.customPriceString ??
              generatePriceString(options.price ?? 0)}
          </p>
        </div>
      </div>
      {options.message && (
        <div
          className="spc-message-div"
          style={{
            width: '100%',
            boxSizing: 'border-box',
            backgroundColor:
              options.themeOption?.baseColor ?? themes.blue.baseColor,
            font: `${30 * scale}px 'sans-serif'`,
            padding: `${10 * scale}px`,
            borderRadius: `0px 0px ${r}px ${r}px`,
            wordWrap: 'break-word',
            color: options.themeOption?.txtColor ?? themes.blue.txtColor,
          }}
        >
          {options.message}
        </div>
      )}
    </div>
  ) : (
    <div></div>
  );
};
