import { pathToFileURL } from "node:url";
import { buildStructureDefinitionR4Definitions } from "../src/generator/sources/structuredefinition-r4.ts";

export function runInspectChoiceGroupsCli(
	argv = process.argv.slice(2),
	options: {
		log?: (message: string) => void;
	} = {},
): void {
	const log = options.log ?? console.log;
	const filter = argv[0]?.toLowerCase() ?? null;
	const structureDefinitionResult = buildStructureDefinitionR4Definitions();

	for (const definition of [
		...structureDefinitionResult.definitions.values(),
	].sort((left, right) => left.name.localeCompare(right.name))) {
		const groups = new Map<string, string[]>();

		for (const property of definition.properties) {
			if (!property.choiceGroup || property.jsonName.startsWith("_")) {
				continue;
			}

			const fields = groups.get(property.choiceGroup) ?? [];
			fields.push(property.jsonName);
			groups.set(property.choiceGroup, fields);
		}

		const normalizedGroups = [...groups.entries()]
			.map(([choiceGroup, fields]) => ({
				choiceGroup,
				fields: [...new Set(fields)].sort((left, right) =>
					left.localeCompare(right),
				),
			}))
			.filter((group) => group.fields.length > 1);

		if (normalizedGroups.length === 0) {
			continue;
		}

		if (
			filter &&
			!definition.name.toLowerCase().includes(filter) &&
			!normalizedGroups.some((group) =>
				group.choiceGroup.toLowerCase().includes(filter),
			)
		) {
			continue;
		}

		log(definition.name);

		for (const group of normalizedGroups) {
			log(`  ${group.choiceGroup}: ${group.fields.join(", ")}`);
		}
	}
}

if (
	process.argv[1] &&
	import.meta.url === pathToFileURL(process.argv[1]).href
) {
	runInspectChoiceGroupsCli();
}
