// File: src/utils/projectIcons.tsx
import { 
  Globe, 
  Hourglass, 
  Cake, 
  Briefcase, 
  Layers, 
  ChefHat, 
  Shield, 
  Bot, 
  Film, 
  Sparkles, 
  ShoppingCart, 
  Package,
  Utensils
} from "lucide-react";
import React from "react";

// Map the project icon to the corresponding Lucide icon component
export const getProjectIcon = (slug: string): React.ReactNode => {
  switch (slug) {
    case "nodo-dark-kitchens":
      return <ChefHat className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />;
    case "jai-vier":
      return <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />;
    case "security-system":
      return <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />;
    case "cronos":
      return <Hourglass className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />;
    case "cache-of-recipes":
      return <ChefHat className="h-5 w-5 sm:h-6 sm:w-6 text-white" />;
    case "bakery-pos":
      return <Cake className="h-5 w-5 sm:h-6 sm:w-6 text-pink-500" />;
    case "solo-para-eva":
      return <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />;
    case "cuevana":
      return <Film className="h-5 w-5 sm:h-6 sm:w-6 text-violet-600" />;
    case "supply-stream":
      return <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-sky-600" />;
    case "warehouse-system":
      return <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />;
      
    default:
      return <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />;
  }
};

export default getProjectIcon;