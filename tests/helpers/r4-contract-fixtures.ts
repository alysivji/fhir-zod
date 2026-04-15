export function minimalObservation(): Record<string, unknown> {
	return {
		resourceType: "Observation",
		status: "final",
		code: { text: "Example observation" },
	};
}

export function minimalExtension(): Record<string, unknown> {
	return {
		url: "http://example.test/fhir/StructureDefinition/example-extension",
	};
}

export function minimalParameter(): Record<string, unknown> {
	return {
		name: "example",
	};
}

export function minimalMeta(): Record<string, unknown> {
	return {};
}

export function minimalElementDefinition(): Record<string, unknown> {
	return {
		path: "Patient.name",
	};
}

export function minimalEncounter(): Record<string, unknown> {
	return {
		resourceType: "Encounter",
		status: "finished",
		class: { code: "AMB" },
	};
}

export function minimalAccount(): Record<string, unknown> {
	return {
		resourceType: "Account",
		status: "active",
	};
}

export function minimalBundle(): Record<string, unknown> {
	return {
		resourceType: "Bundle",
		type: "collection",
	};
}

export function minimalQuantity(): Record<string, unknown> {
	return {};
}

export function primitiveMetadata(): Record<string, unknown> {
	return {
		extension: [
			{
				url: "http://example.test/fhir/StructureDefinition/primitive-note",
				valueString: "metadata only",
			},
		],
	};
}
