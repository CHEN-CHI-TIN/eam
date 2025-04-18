import React from "react";
import PreviewSurvey from "../src/components/previewSurvey.jsx";
import { json as defaultJson } from "../src/components/json.js";

export default {
  title: "Components/PreviewSurvey",
  component: PreviewSurvey,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    json: {
      control: 'object',
      description: '問卷的JSON配置',
    }
  }
};

export const Default = {
  args: {
    json: defaultJson
  }
};
