import React from "react";
import Button from "/src/components/button/";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {},
};

export const WithCustomText = {
  render: () => <Button>Custom Button Text</Button>,
};
