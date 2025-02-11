import Image, { ImageProps } from 'next/image';

const assetPrefix = process.env.AssetPrefix || '';

export default function MyImage(props: ImageProps) {
  const modifiedSrc =
    typeof props.src === 'string' && props.src.startsWith('/')
      ? assetPrefix + props.src.substring(1) // Remove the starting `/` and prepend assetPrefix
      : props.src;

  // eslint-disable-next-line
  return <Image {...props} src={modifiedSrc} />;
}