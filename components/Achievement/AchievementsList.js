import Achievement from "./Achievement";
import { achievements } from "../../constant";
function AchievementsList() {
  return (
    <>
      {achievements.map((e) => (
        <Achievement
          title={e.title}
          shortDescription={e.shortDescription}
          description={e.description}
        />
      ))}
    </>
  );
}

export default AchievementsList;
