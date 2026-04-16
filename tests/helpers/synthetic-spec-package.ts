import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

type JsonResource = {
	[key: string]: unknown;
	name?: string;
	resourceType: string;
	url?: string;
};

type SyntheticSpecPackage = {
	packageRoot: string;
	writeCodeSystem: (resource: JsonResource) => void;
	writeStructureDefinition: (resource: JsonResource) => void;
	writeValueSet: (resource: JsonResource) => void;
};

function writeJsonResource(
	packageRoot: string,
	filename: string,
	value: unknown,
): void {
	writeFileSync(
		join(packageRoot, filename),
		`${JSON.stringify(value, null, 2)}\n`,
		"utf8",
	);
}

function resourceFilename(prefix: string, resource: JsonResource): string {
	const id = resource.name ?? resource.url?.split("/").at(-1);

	if (!id) {
		throw new Error(`Synthetic ${prefix} resource requires a name or url.`);
	}

	return `${prefix}-${id}.json`;
}

export function createSyntheticSpecPackage(): SyntheticSpecPackage {
	const packageRoot = mkdtempSync(join(tmpdir(), "fhir-zod-spec-package-"));
	mkdirSync(packageRoot, { recursive: true });

	const packageApi: SyntheticSpecPackage = {
		packageRoot,
		writeCodeSystem: (resource) => {
			writeJsonResource(
				packageRoot,
				resourceFilename("CodeSystem", resource),
				resource,
			);
		},
		writeStructureDefinition: (resource) => {
			writeJsonResource(
				packageRoot,
				resourceFilename("StructureDefinition", resource),
				resource,
			);
		},
		writeValueSet: (resource) => {
			writeJsonResource(
				packageRoot,
				resourceFilename("ValueSet", resource),
				resource,
			);
		},
	};

	writeBaseStructureDefinitions(packageApi);
	writeTerminology(packageApi);
	writeSchemaResourceDefinitions(packageApi);

	writeJsonResource(packageRoot, "Parameters-ignored.json", {
		resourceType: "Parameters",
	});

	return packageApi;
}

function structureDefinition(
	name: string,
	options: {
		abstract?: boolean;
		baseDefinition?: string;
		description?: string;
		elements?: unknown[];
		kind: string;
		type?: string;
		url?: string;
		version?: string;
	},
): JsonResource {
	const type = options.type ?? name;

	return {
		abstract: options.abstract,
		baseDefinition: options.baseDefinition,
		description: options.description ?? `${name} definition`,
		kind: options.kind,
		name,
		resourceType: "StructureDefinition",
		snapshot: {
			element: [
				element(type, {
					definition: `${name} root`,
					max: "1",
					min: 0,
				}),
				...(options.elements ?? []),
			],
		},
		type,
		url: options.url ?? `http://hl7.org/fhir/StructureDefinition/${name}`,
		version: options.version ?? "4.0.1-test",
	};
}

function element(
	path: string,
	options: {
		basePath?: string;
		binding?: unknown;
		constraint?: unknown[];
		definition?: string;
		max?: string;
		min?: number;
		short?: string;
		type?: unknown[];
	} = {},
): unknown {
	return {
		...(options.basePath ? { base: { path: options.basePath } } : {}),
		...(options.binding ? { binding: options.binding } : {}),
		...(options.constraint ? { constraint: options.constraint } : {}),
		...(options.definition ? { definition: options.definition } : {}),
		id: path,
		max: options.max ?? "1",
		min: options.min ?? 0,
		path,
		...(options.short ? { short: options.short } : {}),
		...(options.type ? { type: options.type } : {}),
	};
}

function type(
	code: string,
	options: {
		extension?: unknown[];
		targetProfile?: string | string[];
	} = {},
): unknown {
	return {
		code,
		...(options.extension ? { extension: options.extension } : {}),
		...(options.targetProfile ? { targetProfile: options.targetProfile } : {}),
	};
}

function writeBaseStructureDefinitions(spec: SyntheticSpecPackage): void {
	spec.writeStructureDefinition(
		structureDefinition("Element", {
			abstract: true,
			elements: [
				element("Element.id", {
					type: [type("http://hl7.org/fhirpath/System.String")],
				}),
			],
			kind: "complex-type",
		}),
	);
	spec.writeStructureDefinition(
		structureDefinition("BackboneElement", {
			abstract: true,
			baseDefinition: "http://hl7.org/fhir/StructureDefinition/Element",
			kind: "complex-type",
		}),
	);
	spec.writeStructureDefinition(
		structureDefinition("Resource", {
			abstract: true,
			elements: [
				element("Resource.id", {
					basePath: "Resource.id",
					type: [type("http://hl7.org/fhirpath/System.String")],
				}),
			],
			kind: "resource",
		}),
	);
	spec.writeStructureDefinition(
		structureDefinition("DomainResource", {
			abstract: true,
			baseDefinition: "http://hl7.org/fhir/StructureDefinition/Resource",
			kind: "resource",
		}),
	);
	spec.writeStructureDefinition(
		structureDefinition("string", {
			elements: [
				element("string.value", {
					type: [
						type("http://hl7.org/fhirpath/System.String", {
							extension: [
								{
									url: "http://hl7.org/fhir/StructureDefinition/regex",
									valueString: "[A-Z]+",
								},
							],
						}),
					],
				}),
			],
			kind: "primitive-type",
		}),
	);
	spec.writeStructureDefinition(
		structureDefinition("code", {
			elements: [
				element("code.value", {
					type: [type("http://hl7.org/fhirpath/System.String")],
				}),
			],
			kind: "primitive-type",
		}),
	);
	spec.writeStructureDefinition(
		structureDefinition("CodeableConcept", {
			elements: [
				element("CodeableConcept.text", {
					type: [type("string")],
				}),
			],
			kind: "complex-type",
		}),
	);
	spec.writeStructureDefinition(
		structureDefinition("Reference", {
			elements: [
				element("Reference.reference", {
					type: [type("string")],
				}),
			],
			kind: "complex-type",
		}),
	);
}

function writeTerminology(spec: SyntheticSpecPackage): void {
	spec.writeCodeSystem({
		concept: [
			{ code: "system-code" },
			{ code: "system-parent", concept: [{ code: "system-child" }] },
		],
		resourceType: "CodeSystem",
		url: "http://example.test/CodeSystem/patient-status",
	});
	spec.writeValueSet({
		compose: {
			include: [
				{
					concept: [{ code: "inline-code" }],
					system: "http://example.test/CodeSystem/patient-status",
					valueSet: ["http://example.test/ValueSet/imported-status|2"],
				},
			],
		},
		expansion: {
			contains: [
				{
					code: "expanded-code",
					contains: [{ code: "nested-expanded-code" }],
				},
			],
		},
		resourceType: "ValueSet",
		url: "http://example.test/ValueSet/patient-status",
	});
	spec.writeValueSet({
		compose: {
			include: [
				{
					concept: [{ code: "imported-code" }],
					valueSet: ["http://example.test/ValueSet/patient-status"],
				},
			],
		},
		resourceType: "ValueSet",
		url: "http://example.test/ValueSet/imported-status",
	});
}

function writeSchemaResourceDefinitions(spec: SyntheticSpecPackage): void {
	spec.writeStructureDefinition(
		structureDefinition("Patient", {
			baseDefinition: "http://hl7.org/fhir/StructureDefinition/DomainResource",
			elements: [
				element("Patient.id", {
					basePath: "Resource.id",
					definition: "Logical id",
					type: [type("http://hl7.org/fhirpath/System.String")],
				}),
				element("Patient.name", {
					definition: "Names",
					max: "*",
					type: [type("string")],
				}),
				element("Patient.status", {
					binding: {
						strength: "required",
						valueSet: "http://example.test/ValueSet/patient-status|1",
					},
					definition: "Status",
					min: 1,
					type: [type("code")],
				}),
				element("Patient.language", {
					binding: {
						strength: "preferred",
						valueSet: "http://example.test/ValueSet/patient-status",
					},
					type: [type("code")],
				}),
				element("Patient.managingOrganization", {
					type: [
						type("Reference", {
							targetProfile: [
								"http://hl7.org/fhir/StructureDefinition/Organization",
								"http://hl7.org/fhir/StructureDefinition/Patient",
							],
						}),
					],
				}),
				element("Patient.contact", {
					definition: "A contact",
					type: [type("BackboneElement")],
				}),
				element("Patient.contact.name", {
					min: 1,
					type: [type("string")],
				}),
				element("Patient.contact.relationship", {
					max: "*",
					type: [type("CodeableConcept")],
				}),
				element("Patient.empty", {
					type: [type("BackboneElement")],
				}),
			],
			kind: "resource",
			version: "4.0.1-patient",
		}),
	);

	spec.writeStructureDefinition(
		structureDefinition("Observation", {
			baseDefinition: "http://hl7.org/fhir/StructureDefinition/DomainResource",
			elements: [
				element("Observation.status", {
					binding: {
						strength: "required",
						valueSetReference: {
							reference: "http://example.test/ValueSet/patient-status|1",
						},
					},
					constraint: [
						{
							expression: "status.exists()",
							human: "status exists",
							key: "obs-2",
							severity: "error",
						},
						{
							key: "obs-1",
						},
						{
							human: "missing key is ignored",
						},
					],
					min: 1,
					type: [type("code")],
				}),
				element("Observation.value[x]", {
					type: [
						type("string"),
						type("CodeableConcept"),
						type("Reference", {
							targetProfile: "http://hl7.org/fhir/StructureDefinition/Patient",
						}),
						type("Reference", {
							targetProfile: [
								"http://hl7.org/fhir/StructureDefinition/Encounter",
								"http://hl7.org/fhir/StructureDefinition/Patient",
							],
						}),
					],
				}),
			],
			kind: "resource",
		}),
	);
}
