export function findIndexUtil(key, simpsons) {
  return simpsons.findIndex(
    (element) => element.character + element.quote === key
  );
}
