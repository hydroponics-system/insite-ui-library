import { setCompodocJson } from "@storybook/addon-docs/angular";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  layout: "fullscreen",
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
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
  darkMode: {
    // Set the initial theme
    current: "dark",
  },
};
