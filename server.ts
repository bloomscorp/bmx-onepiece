import app from './app';
import { syncDatabase } from './src/database/database-sync';

const PORT: number = +(process.env.PORT || 3000);

const startServer = async (): Promise<void> => {
	try {
		if (process.env.NODE_ENV !== 'production') {
			await syncDatabase();
		}

		app.listen(PORT, async (): Promise<void> => {
			console.log(`Server is listening on port ${PORT}...`);
		});
	} catch (e: any) {
		console.log(e.message);
	}
};

startServer().then((value: void): void => {});