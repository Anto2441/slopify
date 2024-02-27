import { type Decorator } from "@storybook/react";
import React from "react";

import { figtree } from "@/app/fonts";

import "@/app/globals.css";

export const WithTailwind: Decorator = (Story) => {
  return (
    <div
      className={`${figtree.variable} bg-black font-sans text-white antialiased`}
    >
      <Story />
    </div>
  );
};
