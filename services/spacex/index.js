import axios from 'axios';

const generateSpacexClient = () => {
	const spacexClient = axios.create({
		baseURL: process.env.SPACEX_API_URL,
	});

	return spacexClient;
};

export const getLatestLaunches = async () => {
	const spacexClient = generateSpacexClient();
	const launchData = await spacexClient.get('/launches/latest');
	console.log(launchData);
	return launchData.data;
};
