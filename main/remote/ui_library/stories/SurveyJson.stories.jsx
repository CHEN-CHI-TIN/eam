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
      "title": "Scholastic Assessment Test",
      "completedHtml": "<div style=\"max-width: 1000px; width: 100%; padding 32px; margin: 0 auto;\">\n<h5 style=\"text-align: justify\">\nThank you for taking the time to complete this assessment test. \n<br>\n<br>\nYour responses will be carefully reviewed, and the results will be published <a href=\"https://www.google.com/\">on the student portal</a> within the next two weeks.</h5>",

      "pages": [{
        "name": "reading-part-one",

        "elements": [{
          "type": "panel",
          "name": "passage-one",

          "elements": [{
            "type": "html",
            "name": "passage",
            "html": " <p style=\"margin-top: 1em; text-align: justify;\">Regular physical activity has numerous benefits for both physical and mental health. Exercise has been shown to improve cardiovascular health, strengthen muscles and bones, and help maintain a healthy weight. However, its benefits extend beyond the physical realm. Research has consistently demonstrated that exercise can have a positive impact on mental health as well. Engaging in regular physical activity has been linked to reduced symptoms of depression and anxiety, improved mood, and increased feelings of well-being. In addition, exercise can enhance cognitive function and improve sleep quality, further contributing to overall mental wellness.</p>"
          }, {
            "type": "radiogroup",
            "name": "main-idea",
            "title": "What is the main idea of the passage?",
            "correctAnswer": "a) The benefits of exercise for mental health",

            "choices": [
              "a) The benefits of exercise for mental health",
              "b) The history of the Olympic Games",
              "c) The importance of teamwork in sports",
              "d) The impact of diet on athletic performance"
            ],

            "choicesOrder": "random"
          }, {
            "type": "radiogroup",
            "name": "word-meaning",
            "title": "In the last sentence, the word \"enhance\" most nearly means:",
            "correctAnswer": "b) Improve",
            "choices": ["a) Simplify", "b) Improve", "c) Minimize", "d) Dismiss"],
            "choicesOrder": "random"
          }],

          "title": "Passage 1: The Benefits of Exercise"
        }],

        "title": "Reading Section (Part 1)"
      }, {
        "name": "reading-part-two",

        "elements": [{
          "type": "panel",
          "name": "passage-two",

          "elements": [{
            "type": "html",
            "name": "passage-text",
            "html": " <p style=\"margin-top: 1em; text-align: justify;\">The Olympic Games, originating in ancient Greece, have a rich history spanning centuries. Initially, the games were held as a tribute to the gods and involved various athletic competitions, including running, wrestling, and chariot racing. Over time, the games evolved into a symbol of unity and peace, bringing together athletes from different regions and cultures to compete on the world stage. Today, the Olympic Games continue to inspire and captivate audiences worldwide, showcasing the incredible talent and dedication of athletes from across the globe.</p>"
          }, {
            "type": "radiogroup",
            "name": "summary",
            "title": "Which statement best summarizes the passage?",
            "correctAnswer": "d) The Olympic Games have evolved into a symbol of unity and peace.",

            "choices": [
              "a) The Olympic Games were initially held as a religious ceremony.",
              "b) The Olympic Games have lost their significance over time.",
              "c) The Olympic Games have always been a source of conflict among nations.",
              "d) The Olympic Games have evolved into a symbol of unity and peace."
            ],

            "choicesOrder": "random"
          }],

          "title": "Passage 2: The History of the Olympic Games"
        }],

        "title": "Reading Section (Part 2)"
      }, {
        "name": "writing-and-language",

        "elements": [{
          "type": "panel",
          "name": "grammatical-error",

          "elements": [{
            "type": "radiogroup",
            "name": "grammar-question",
            "titleLocation": "hidden",
            "correctAnswer": "b) Each of the students have completed their assignments.",

            "choices": [
              "a) She told me that she would meet us there.",
              "b) Each of the students have completed their assignments.",
              "c) The dog quickly ran across the field.",
              "d) He did good on his exam."
            ],

            "choicesOrder": "random"
          }],

          "title": "Which of the following sentences contains a grammatical error?"
        }, {
          "type": "panel",
          "name": "revision-panel",

          "elements": [{
            "type": "html",
            "name": "original-sentence",
            "html": "<u>Original:</u> <em>The new policy will be implemented next month, providing it is approved by the board.</em>"
          }, {
            "type": "radiogroup",
            "name": "revision-options",
            "titleLocation": "hidden",
            "correctAnswer": "b) If the board approves it, the new policy will be implemented next month.",

            "choices": [
              "a) The new policy will be implemented next month if it is approved by the board.",
              "b) If the board approves it, the new policy will be implemented next month.",
              "c) The new policy will be implemented next month, provided it is approved by the board.",
              "d) Next month, the new policy will be implemented, provided the board approves it."
            ],

            "choicesOrder": "random"
          }],

          "title": "Which revision improves the clarity of the sentence?"
        }],

        "title": "Writing and Language Section"
      }, {
        "name": "math",

        "elements": [{
          "type": "panel",
          "name": "math-panel",

          "elements": [{
            "type": "radiogroup",
            "name": "expression-options",
            "titleLocation": "hidden",
            "correctAnswer": "c) 9",
            "choices": ["a) 4", "b) 6", "c) 9", "d) 10"],
            "colCount": 2
          }],

          "title": "If 2𝑥 − 5 = 13, what is the value of 𝑥?"
        }, {
          "type": "panel",
          "name": "panel2",

          "elements": [{
            "type": "radiogroup",
            "name": "rectangle",
            "titleLocation": "hidden",
            "correctAnswer": "c) 26 inches",
            "choices": ["a) 10 inches", "b) 18 inches", "c) 26 inches", "d) 36 inches"],
            "colCount": 2
          }],

          "title": "A rectangle has a length of 8 inches and a width of 5 inches. What is the perimeter of the rectangle?"
        }],

        "title": "Math Section"
      }, {
        "name": "essay-section",

        "elements": [{
          "type": "panel",
          "name": "panel1",

          "elements": [{
            "type": "image",
            "name": "question1",
            "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=7852a3d1-8b1e-4fe9-a459-5eb11b00965d",
            "altText": "melting iceberg",
            "imageFit": "cover",
            "imageHeight": "400",
            "imageWidth": "100%"
          }, {
            "type": "comment",
            "name": "essay-prompt",
            "title": "\nIn recent years, global warming has become a critical environmental issue, significantly impacting polar ice caps. The image below serves as a stark visual representation of this phenomenon. Your task is to write an essay analyzing the effects of global warming on polar ice caps and the broader implications for our planet.\n\n",
            "titleLocation": "top",
            "descriptionLocation": "underInput",
            "maxLength": 1000,
            "rows": 10,
            "placeholder": "Write your essay here..",
            "autoGrow": true
          }]
        }],

        "title": "Essay Section (Image-Based)"
      }],

      "showProgressBar": true,
      "progressBarLocation": "belowHeader",
      "progressBarShowPageTitles": true,
      "progressBarShowPageNumbers": true,
      "completeText": "Submit",
      "showPreviewBeforeComplete": true,
      "previewMode": "showAnsweredQuestions",
      "widthMode": "static",
      "width": "800"
    }
  },
}; 