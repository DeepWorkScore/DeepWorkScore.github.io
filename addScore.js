import Cookies from "./packages/js.cookie.mjs";
export function addToScore() {
  var workType = document.getElementById("ScoreForm").elements.work_type.value;
  var workHours = document.getElementById("ScoreForm").elements.hours.value;
  var scoreToAdd = 0;
  if (workType === "ShallowWork") {
    scoreToAdd = parseInt(workHours);
    Cookies.set(
      "ShallowScore",
      (parseInt(Cookies.get("ShallowScore")) + scoreToAdd).toString()
    );
  } else if (workType === "StudyWork") {
    scoreToAdd = parseInt(workHours) * 2;
    Cookies.set(
      "StudyScore",
      (parseInt(Cookies.get("StudyScore")) + scoreToAdd).toString()
    );
  } else {
    scoreToAdd = parseInt(workHours) * 10;
    Cookies.set(
      "DeepScore",
      (parseInt(Cookies.get("DeepScore")) + scoreToAdd).toString()
    );
  }
  console.log(parseInt(Cookies.get("Score")));
  Cookies.set(
    "Score",
    (parseInt(Cookies.get("Score")) + scoreToAdd).toString()
  );

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];

  let daysScore = JSON.parse(Cookies.get("DaysScore"));
  daysScore[day] += scoreToAdd;
  Cookies.set("DaysScore", JSON.stringify(daysScore));
}
