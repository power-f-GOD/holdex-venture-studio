import type { DocumentNode, OperationDefinitionNode, FieldNode } from 'graphql';

export default function queryName(query: DocumentNode) {
	let definition = query.definitions[0] as OperationDefinitionNode;
	let selections = definition.selectionSet.selections[0] as FieldNode;

	return selections.name.value;
}
