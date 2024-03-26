export const settings = {
	slidesToScroll: 1,
	slidesToShow: 3,
	infinite: false,
	responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 3,
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
				arrows: false,
				dots: true,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
				arrows: false,
				dots: true,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
			},
		},
	],
};
