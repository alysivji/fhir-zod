.DEFAULT_GOAL := help

.PHONY: help install build test coverage lint format check fetch-spec generate list-r4-targets

help: ## Show available commands
	@awk 'BEGIN {FS = ":.*## "}; /^[a-zA-Z0-9_.-]+:.*## / {printf "  %-12s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install project dependencies
	npm install

build: ## Build the library
	npm run build

test: ## Run the test suite
	npm test

coverage: ## Run tests with coverage
	npm run coverage

lint: ## Run Biome linter
	npm run lint

format: ## Format files with Biome
	npm run format

check: ## Run Biome checks
	npm run check

fetch-spec: ## Download pinned FHIR spec inputs into .local
	npm run fetch-spec

generate: ## Run the generator entrypoint
	npm run generate

list-r4-targets: ## List concrete R4 resources and final generation targets
	npm run list:r4-targets
