import React from "react";
import type { Achievement } from "@/types/achievements";
import { AchievementCardRistek } from "./RistekAchievements";

interface AchievementsGridProps {
  achievements: Achievement[];
}

const AchievementsGrid: React.FC<AchievementsGridProps> = ({
  achievements,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {achievements.map((achievement) => (
        <div key={achievement.id} className="achievement-card-container">
          <AchievementCardRistek achievement={achievement} />
        </div>
      ))}
    </div>
  );
};

export default AchievementsGrid;
