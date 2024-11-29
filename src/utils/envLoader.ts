const envLoader = (key: string): string => {
	const value = Bun.env[key];
	if (!value) {
		console.error(`environment variable ${key} is not set`);
		process.exit(1);
	}
	return value;
};

export default envLoader;
