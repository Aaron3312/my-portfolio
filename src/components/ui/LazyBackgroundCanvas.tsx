import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';

const BackgroundCanvas = dynamic(() => import('./BackgroundCanvas'), {
  ssr: false,
  loading: () => null
});

type BackgroundCanvasProps = ComponentProps<typeof BackgroundCanvas>;

export default function LazyBackgroundCanvas(props: BackgroundCanvasProps) {
  return <BackgroundCanvas {...props} />;
}