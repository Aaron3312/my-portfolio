// File: src/utils/projectIcons.tsx
import { Globe, Hourglass, Cake, Briefcase } from "lucide-react";
import React from "react";

// Map the project icon to the corresponding Lucide icon component
export const getProjectIcon = (slug: string): React.ReactNode => {
  switch (slug) {
    case "supply-stream":
      return <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-sky-600" />;
    case "cronos":
      return <Hourglass className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />;
    case "bakery-pos":
      return <Cake className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500" />;
    default:
      return <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />;
  }
};

export default getProjectIcon;