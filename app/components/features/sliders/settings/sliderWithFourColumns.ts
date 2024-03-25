export const settings = {
	slidesToScroll: 1,
	slidesToShow: 4,
	infinite: false,
	responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false,
				arrows: false,
				dots: true,
			},
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: false,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
				dots: true,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
			},
		},
	],
};
