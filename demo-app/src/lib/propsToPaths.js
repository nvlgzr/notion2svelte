export default function propsToPaths(obj, includeValues = false, stringify = true) {
	const isObject = (val) => val && typeof val === 'object' && !Array.isArray(val);

	const addDelimiter = (a, b) => (a ? `${a}.${b}` : b);

	const paths = (obj = {}, head = '') => {
		if (!isObject(obj) && !Array.isArray(obj)) {
			const deemph = ['null', 'undefined', 'default', 'false', null, undefined, false].includes(
				obj
			);

			return `<li style="${
				deemph ? 'color:#ccc' : ''
			}; background:#fee; list-style-type: none;"><strong>${head}</strong>: ${obj}</li>`;
		}

		if (Array.isArray(obj)) {
			return `${head}: [<div style="border-left: 3px coral dotted; padding-left: 1rem; margin:0;">${obj.map(
				(subobj) => propsToPaths(subobj, includeValues, stringify)
			)}</div>]`;
		}

		const reduction = Object.entries(obj)
			.reduce((product, [key, value]) => {
				let fullPath = addDelimiter(head, key);
				return [...product, `${paths(value, fullPath)}`];
			}, [])
			.join('');

		const res = `<ul style="border-left: 3px solid gray; margin: 0.5rem; margin-left: 1rem; padding-left: 0.5rem">${reduction}</ul>`;

		return res;
	};

	return `${paths(obj)}`;
}

// var test = {
// 	top1: {
// 		mid1: {
// 			undefined: undefined
// 		},
// 		mid2: 'goz',
// 		mid3: {
// 			obj: {
// 				null: null
// 			},
// 			number: 3
// 		}
// 	},
// 	array: [1, 2, { bar: 1 }]
// };
// console.log('1️⃣', propsToPaths(test));
// console.log('2️⃣', propsToPaths(test, true));
// console.log('3️⃣', propsToPaths(test, true, false));
