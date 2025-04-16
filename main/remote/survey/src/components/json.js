export const json = {
  title: "問卷調查",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "name",
          title: "您的姓名是？"
        },
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
};

export default json; 