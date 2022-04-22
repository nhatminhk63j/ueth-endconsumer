/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import RPI from 'react-progressive-image';
import styled, { keyframes } from 'styled-components';
import { GREY_300 } from 'assets/theme/colors';

export const DEFAULT_LINK_PHOTO =
  'https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2Fthumb_VPXSB76O6G_not-found-image.png?generation=1600350049551161&alt=media';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInImg = styled.img`
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
  animation-timing-function: linear;
`;

interface IProgressiveImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const ProgressiveImage: React.FunctionComponent<IProgressiveImageProps> = (
  props
) => {
  return (
    <RPI src={props.src || DEFAULT_LINK_PHOTO} placeholder="">
      {(src: string, loading: boolean) =>
        loading ? (
          <span
            style={{
              ...props.style,
              display: 'inline-block',
              backgroundColor: GREY_300,
            }}
          />
        ) : (
          <FadeInImg
            {...props}
            alt={props.alt || ''}
            style={{
              ...props.style,
            }}
          />
        )
      }
    </RPI>
  );
};

export default ProgressiveImage;
