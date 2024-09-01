import type { Meta, StoryFn } from "@storybook/react";
import { SidebarFilterSearch } from "./SidebarFilterSearch";

export default {
	title: "Widgets/SidebarFilter/SidebarFilterSearch",
	component: SidebarFilterSearch,
} as Meta<typeof SidebarFilterSearch>;

const Template: StoryFn<typeof SidebarFilterSearch> = (args) => {
	return (
		<div style={{ maxWidth: 270, border: "1px solid var(--gray-40)" }}>
			<SidebarFilterSearch {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {};
