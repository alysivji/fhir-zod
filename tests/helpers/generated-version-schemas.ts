export function mergeGeneratedVersionSchemas(
	rootSchemas: Record<string, unknown>,
	folderModules: Record<string, unknown>,
): Record<string, unknown> {
	return Object.assign({}, rootSchemas, ...Object.values(folderModules));
}
