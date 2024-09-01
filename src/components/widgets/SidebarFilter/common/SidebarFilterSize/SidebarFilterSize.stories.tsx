import type { Meta, StoryFn } from "@storybook/react";
import { SidebarFilterSize } from "./SidebarFilterSize";

export default {
	title: "Widgets/SidebarFilter/SidebarFilterSize",
	component: SidebarFilterSize,
} as Meta<typeof SidebarFilterSize>;

const Template: StoryFn<typeof SidebarFilterSize> = (args) => {
	return (
		<div style={{ maxWidth: 270, border: "1px solid var(--gray-40)" }}>
			<SidebarFilterSize {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	items: ["L", "M", "S", "XL", "XXL"],
};
