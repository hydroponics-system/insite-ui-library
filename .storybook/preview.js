import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  backgrounds: {
    default: "Navy Dark",
    values: [
      {
        name: "Dark Blue",
        value: "#222B45",
      },
      {
        name: "Navy Dark",
        value: "#161D31",
      },
    ],
  },
};
