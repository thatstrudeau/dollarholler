export function load({ params }) {
	if (params.id) return { id: params.id };
	throw error(404, 'Not Found');
}
