import { CorsOptions } from "cors";

const allowedOrigins: string[] = [
	"https://swiftshop-mu.vercel.app",
	"https://swiftshop-203lfgixu-oleh-collins-projects.vercel.app",
	"https://swiftshop-eight.vercel.app",
];

const corsOptions: CorsOptions = {
	origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
		if (!origin || allowedOrigins.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	// origin: "https://swiftshop-203lfgixu-oleh-collins-projects.vercel.app",
	optionsSuccessStatus: 200,
};

export default corsOptions;
