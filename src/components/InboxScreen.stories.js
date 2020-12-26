import React from "react";
import { Provider } from "react-redux";
//import { action } from "@storybook/addon-actions";
import { PureInboxScreen } from "./InboxScreen";
import * as TaskListStories from "./TaskList.stories";

// A super-simple mock of a redux store
const store = {
  getState: () => ({
    tasks: TaskListStories.Default.args.tasks,
  }),
  subscribe: () => 0,
  dispatch: () => 0, // action("dispatch"),
};

const inboxScreenStories = {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};
export default inboxScreenStories;

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
