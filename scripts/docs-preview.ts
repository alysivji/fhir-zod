import { spawn } from "node:child_process";
import { createServer } from "node:net";

const defaultPort = 4173;
const maxPort = 4273;

async function main(): Promise<void> {
	const port = await findAvailablePort(defaultPort, maxPort);
	await runPreview(port);
}

function findAvailablePort(
	startPort: number,
	endPort: number,
): Promise<number> {
	return new Promise((resolve, reject) => {
		const tryPort = (port: number): void => {
			if (port > endPort) {
				reject(
					new Error(
						`Unable to find an open docs preview port in range ${startPort}-${endPort}.`,
					),
				);
				return;
			}

			const server = createServer();

			server.once("error", (error: NodeJS.ErrnoException) => {
				server.close();
				if (error.code === "EADDRINUSE") {
					tryPort(port + 1);
					return;
				}

				reject(error);
			});

			server.once("listening", () => {
				server.close(() => resolve(port));
			});

			server.listen(port);
		};

		tryPort(startPort);
	});
}

function runPreview(port: number): Promise<void> {
	return new Promise((resolve, reject) => {
		console.log(`docs-preview: using http://localhost:${port}/`);

		const child = spawn(
			process.platform === "win32" ? "npx.cmd" : "npx",
			["vitepress", "preview", "docs", "--port", String(port)],
			{
				env: process.env,
				stdio: "inherit",
			},
		);

		child.once("error", reject);
		child.once("exit", (code, signal) => {
			if (signal) {
				resolve();
				return;
			}

			if (code === 0) {
				resolve();
				return;
			}

			reject(new Error(`vitepress preview exited with code ${code ?? "unknown"}.`));
		});
	});
}

main().catch((error) => {
	console.error(error instanceof Error ? error.message : String(error));
	process.exitCode = 1;
});
