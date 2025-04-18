import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.min.css";
import { json as defaultJson } from "./json";

function PreviewSurvey({ json = defaultJson }) {
  const survey = new Model(json);
  survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
  });
  return (
      <Survey model={survey} />
  );
}

export default PreviewSurvey;