export async function delay(durationMS: number) {
  return new Promise((resolve) => setTimeout(resolve, durationMS));
}
