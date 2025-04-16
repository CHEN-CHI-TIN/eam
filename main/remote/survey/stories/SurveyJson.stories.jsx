import React from "react";
import PreviewSurvey from "../src/components/previewSurvey.jsx";
import { json as defaultJson } from "../src/components/json.js";

export default {
  title: "Components/SurveyJson",
  component: PreviewSurvey,
  parameters: {
    layout: "fullscreen",
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
  },
};

export const CustomSurvey = {
  args: {
    json: {
      title: "自定義問卷示例",
      pages: [
        {
          name: "page1",
          elements: [
            {
              type: "text",
              name: "email",
              title: "您的電子郵件是？"
            },
            {
              type: "dropdown",
              name: "preference",
              title: "您最喜歡的產品是？",
              choices: [
                { value: "product1", text: "產品 A" },
                { value: "product2", text: "產品 B" },
                { value: "product3", text: "產品 C" }
              ]
            }
          ]
        }
      ]
    }
  },
}; 