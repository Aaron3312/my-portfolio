import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';

const ProjectCarousel = dynamic(() => import('./project-carousel'), {
  ssr: false,
  loading: () => (
    <div className="mt-16 animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        ))}
      </div>
    </div>
  )
});

type ProjectCarouselProps = ComponentProps<typeof ProjectCarousel>;

export default function LazyProjectCarousel(props: ProjectCarouselProps) {
  return <ProjectCarousel {...props} />;
}