import React from "react";
import type { AchievementCategory } from "@/types/achievements";

interface CategoryFilterProps {
  categories: AchievementCategory[];
  selectedCategory: AchievementCategory;
  onCategoryChange: (category: AchievementCategory) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-6 py-2 text-base font-semibold transition-colors duration-200 dark:bg-gray-800 ${selectedCategory === category
            ? "bg-red-200 text-red-700 dark:bg-red-300 dark:text-red-800"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
