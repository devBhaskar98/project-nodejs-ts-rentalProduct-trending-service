import dotenv from 'dotenv';
import path from 'path';

const rootDir = path.resolve(__dirname, '../../');
const NODE_ENV = (process.env.NODE_ENV || 'development').trim();

// Determine which .env file to load based on the environment
let envFilePath = path.resolve(rootDir, '.env'); // Default to .env in production mode
if (NODE_ENV === 'development') {
    envFilePath = path.resolve(rootDir, 'dev.env');
} else if (NODE_ENV == 'production') {
    envFilePath = path.join(rootDir, './prod.env'); // For production, use prod.env
}

// Load the environment variables from the correct .env file
dotenv.config({ path: envFilePath });

console.log(`Running in ${NODE_ENV} mode with config from ${envFilePath}`);

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
export const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 12345;

export const server = {
    SERVER_HOSTNAME,
    SERVER_PORT
};
