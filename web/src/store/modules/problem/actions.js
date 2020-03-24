export function removeProblemRequest(id) {
  return {
    type: '@problem/REMOVE_REQUEST',
    payload: { id },
  };
}
