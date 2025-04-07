/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

// Add type definitions for Next.js App Router
declare namespace JSX {
    interface IntrinsicElements {
      "next-route-announcer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
  
  // Extend PageProps type
  declare module "next" {
    interface PageProps {
      params: {
        [key: string]: string;
      };
    }
  }