import { buildOpenApiR4Definitions } from "../src/generator/sources/openapi-r4.ts";
import { buildStructureDefinitionR4Definitions } from "../src/generator/sources/structuredefinition-r4.ts";

const filter = process.argv[2]?.toLowerCase() ?? null;
const openApiDefinitions = buildOpenApiR4Definitions();
const structureDefinitionResult = buildStructureDefinitionR4Definitions(
	openApiDefinitions.keys(),
);

for (const definition of [...structureDefinitionResult.definitions.values()].sort(
	(left, right) => left.name.localeCompare(right.name),
)) {
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

	console.log(definition.name);

	for (const group of normalizedGroups) {
		console.log(`  ${group.choiceGroup}: ${group.fields.join(", ")}`);
	}
}
