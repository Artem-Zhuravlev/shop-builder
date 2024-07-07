import { FooterCol } from "../FooterCol/FooterCol";

export const FooterGetInTouch = () => {
	const { title, list } = {
		title: "Get in Touch",
		list: [
			{
				value: "692 London Road, London, NW36 7JA",
				icon: "icon-location2",
			},
			{
				value: "9:00 AM - 7:00PM",
				icon: "icon-clock2",
			},
			{
				value: "+3808005553535",
				icon: "icon-phone",
			},
			{
				value: "demo@demo.com",
				icon: "icon-mail4",
			},
		],
	};

	return <FooterCol title={title} list={list} />;
};

FooterGetInTouch.displayName = "FooterGetInTouch";
