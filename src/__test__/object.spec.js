import { equal, index, clone, isEmpty, type, trim, toQueryString } from '../object';

describe('object help utils', () => {
	describe('equals function', () => {
		test('string', () => {
			expect(equal('baukh', 'baukh')).toBeTruthy();
			expect(equal('baukh', 'cc')).toBeFalsy();
		});

		test('object', () => {
			let o1 = { name: 'baukh', age: 31 };
			let o2 = { name: 'baukh', age: 31 };
			expect(equal(o1, o2)).toBeTruthy();

			o1 = { name: 'baukh', age: 31 };
			o2 = { name: 'cc', age: 31 };
			expect(equal(o1, o2)).toBeFalsy();

			o1 = null;
			o2 = null;
		});

		test('array', () => {
			let a1 = [1, 2, 3];
			let a2 = [1, 2, 3];
			expect(equal(a1, a2)).toBeTruthy();

			a1 = [1, 2, 3];
			a2 = [3, 2, 1];
			expect(equal(a1, a2)).toBeFalsy();

			a1 = null;
			a2 = null;
		});
	});

	describe('find function', () => {
		let o1 = null;
		let o2 = null;
		let o3 = null;
		let arr = null;

		beforeEach(() => {
			o1 = { name: 'cc', age: 31 };
			o2 = { name: 'kouzi', age: 31 };
			o3 = { name: 'baukh', age: 31 };
			arr = [
				{ name: 'baukh', age: 31 },
				{ name: 'cc', age: 31 },
			];
		});

		afterEach(() => {
			o1 = null;
			o2 = null;
			o3 = null;
			arr = null;
		});

		test('find object index of array', () => {
			expect(index(arr, o1)).toBe(1);
			expect(index(arr, o2)).toBe(-1);
			expect(index(arr, o3)).toBe(0);
		});
	});

	describe('clone function', () => {
		test('clone object', () => {
			let o1 = { name: 'cc', age: 31 };
			let o2 = clone(o1);
			expect(o1.name).toBe(o2.name);
			expect(o1 === o2).toBeFalsy();
		});
	});

	describe('isEmpty function', () => {
		test('object is empty', () => {
			let o1 = { name: 'cc', age: 31 };
			let o2 = {};
			expect(isEmpty(o1)).toBeFalsy();
			expect(isEmpty(o2)).toBeTruthy();

			o1 = null;
			o2 = null;
		});
	});

	describe('type function', () => {
		let nodeList = null;
		let divEle = null;

		beforeEach(() => {
			divEle = document.createElement('div');
			document.body.appendChild(divEle);
			nodeList = document.querySelectorAll('div');
		});

		afterEach(() => {
			document.body.removeChild(divEle);
			nodeList = null;
			divEle = null;
		});

		test('get type of value', () => {
			expect(type(undefined)).toBe('undefined');
			expect(type(null)).toBe('null');
			expect(type(true)).toBe('boolean');
			expect(type(Boolean())).toBe('boolean');
			expect(type(123)).toBe('number');
			expect(type(Number(123))).toBe('number');
			expect(type('123')).toBe('string');
			expect(type(String('123'))).toBe('string');
			expect(type(() => {})).toBe('function');
			expect(type([])).toBe('array');
			expect(type(new Array(1))).toBe('array');
			expect(type(new Date())).toBe('date');
			expect(type(Error())).toBe('error');
			expect(type(/test/)).toBe('regexp');
			expect(type(document.body)).toBe('element');
			expect(type(nodeList)).toBe('nodeList');
			expect(type(divEle)).toBe('element');
		});
	});

	describe('trim function', () => {
		test('remove string space before and after', () => {
			let o = '  baukh  ';
			expect(trim(o)).toBe('baukh');
			o = null;
		});

		test('remove null and undefined from object', () => {
			let o = { name: 'kouzi', age: 28, like: null, title: undefined, gender: 0 };
			expect(trim(o)).toEqual({ name: 'kouzi', age: 28, gender: 0 });
			o = null;
		});
	});

	describe('toQueryString function', () => {
		test('convert object to string as key=value&...', () => {
			let obj1 = { name: 'zhangsan', age: 12 };
			let obj2 = { name: 'zhangsan', age: 12, birth: '' };
			let obj3 = { name: 'zhangsan', params: { name: 'zhangsan', age: 12 }, page: { currentPage: 1, pageSize: 10 }, other: null };
			expect(toQueryString(obj1)).toBe('name=zhangsan&age=12');
			expect(toQueryString(obj2)).toBe('name=zhangsan&age=12&birth=');
			expect(toQueryString(obj3)).toBe('name=zhangsan&params={"name":"zhangsan","age":12}&page={"currentPage":1,"pageSize":10}&other=null');

			obj1 = null;
			obj2 = null;
			obj3 = null;
		});
	});
});
