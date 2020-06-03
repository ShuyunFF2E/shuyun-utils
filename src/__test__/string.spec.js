import { toHump, toHyphen, toFormData } from '../string';

describe('string help utils', () => {

	test('toHump function', () => {
		expect(toHump('font-size')).toBe('fontSize');
		expect(toHump('-font-size')).toBe('FontSize');
		expect(toHump('-font-size-')).toBe('FontSize-');
		expect(toHump('color')).toBe('color');
		expect(toHump('xxx-111-xx')).toBe('xxx111Xx');
		expect(toHump('background-color')).toBe('backgroundColor');
	});

	test('toHyphen function', () => {
		expect(toHyphen('FontSize')).toBe('-font-size');
		expect(toHyphen('fontSize')).toBe('font-size');
		expect(toHyphen('FontSize-')).toBe('-font-size-');
		expect(toHyphen('XXX')).toBe('-x-x-x');
	});

	test('toFormData', () => {
		expect(toFormData('name=zhangsan&age=22&gender=male')).toEqual({ name: 'zhangsan', age: '22', gender: 'male' });
		expect(toFormData('name=zhangsan&age=22&gender=male&birth=')).toEqual({ name: 'zhangsan', age: '22', gender: 'male', birth: '' });
		expect(toFormData('?name=zhangsan&age=22&gender=male&other={gender: "male"}')).toEqual({
			name: 'zhangsan',
			age: '22',
			gender: 'male',
			other: '{gender: "male"}',
		});
	});

});
