import Achievement from "./Achievement";
import { achievements } from "../../constant";
function AchievementsList() {
  return (
    <>
      {achievements.map((e) => (
        <Achievement content={e.description} />
      ))}
    </>
  );
}

export default AchievementsList;
