import { apiSuccess, apiFailure } from '@utils';
import { getLatestLaunches } from '@services/spacex';

exports.handler = async (event, _context, callback) => {
	console.log(JSON.stringify(event));
	try {
		const response = await getLatestLaunches();
		return apiSuccess(callback, response);
	} catch (error) {
		console.error(error);
		return apiFailure(callback, error);
	}
};

exports.whoami = async (event, _context, callback) => {
	console.log(JSON.stringify(event));

	const response = {};

	try {
		if (event.requestContext) {
			if ((response.ip = event.requestContext.identity.sourceIp));
			if ((response.userAgent = event.requestContext.identity.userAgent));
		}
	} catch (error) {
		response.error = 'Something went wrong';
	}

	return callback(null, { body: JSON.stringify({ ...response }) });
};
