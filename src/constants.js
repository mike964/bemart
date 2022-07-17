export const laptop_filters = [
	{
		name: 'Brand',
		options: ['Apple', 'Dell', 'Microsoft', 'Asus', 'Acer'],
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
		group: 'processors',
	},
	{
		name: 'Display Size',
		options: [
			'16 Inches & Above',
			'14 ~ 15.9 Inches',
			'12 ~ 13.9 Inches',
			'12 Inches & Under',
		],
		group: 'displays',
	},
	{
		name: 'Price',
		options: ['Under $500', '$500 ~ $999', '$1000 & Above'],
		group: 'prices',
	},
]

export const cellphone_filters = [
	{
		name: 'Brand',
		options: ['Apple', 'Samsung', 'Motorola', 'Xiaomi'],
		group: 'brands',
	},
	{
		name: 'Storage',
		options: ['64GB', '128GB', '256GB'],
		group: 'storages',
	},
	{
		name: 'Price',
		options: ['Under $500', '$500 ~ $999', '$1000 & Above'],
		group: 'prices',
	},
]

// # Shared filters
// customers reviews
// Display Size
