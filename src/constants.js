export const laptop_filters = [
	{
		name: 'Brand',
		options: ['Apple', 'Asus', 'Acer'],
		group: 'brands', // for matching in redux store
	},
	{
		name: 'Operating System',
		options: ['Windows', 'Mac OS', 'Chrome OS'],
		group: 'opSystems', // for matching in redux store
	},
	{
		name: 'Processor',
		options: [
			'Intel Core i3',
			'Intel Core i5',
			'Intel Core i7',
			'AMD Ryzen 3',
			'AMD Ryzen 5',
			'AMD Ryzen 7',
			'Apple M1',
		],
		group: 'processors', // for matching in redux store
	},
	{
		name: 'Price',
		options: ['Under $500', '$500 ~ $999', '$1000 and more'],
		group: 'prices', // for matching in redux store
	},
]

export const mobile_filters = [
	{
		name: 'Brand',
		options: ['Apple', 'Samsung', 'Motorola'],
	},
	{
		name: 'Storage',
		options: ['64GB', '128GB', '256GB'],
	},
	{
		name: 'Price',
		options: ['500 and less', '500 ~ 999', '$1000 and more'],
	},
]

// # Shared filters
// customers reviews
// Display Size
