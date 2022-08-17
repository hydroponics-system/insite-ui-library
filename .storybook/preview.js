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
    default: "Dark Blue",
    values: [
      {
        name: "Dark Blue",
        value: "#151A30",
      },
      {
        name: "Navy Dark",
        value: "#161D31",
      },
    ],
  },
};
