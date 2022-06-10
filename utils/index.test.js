import { apiSuccess } from '.';

describe('calls the apiSuccess function correctly', () => {
	let callBackSpy;
	beforeEach(() => {
		callBackSpy = jest.fn();
	});
	it('should call the success correctly', () => {
		const data = 'mocked';

		apiSuccess(callBackSpy, 'mocked');
		expect(callBackSpy).toHaveBeenCalledWith(null, {
			body: JSON.stringify({ ...data }),
		});
	});
});
