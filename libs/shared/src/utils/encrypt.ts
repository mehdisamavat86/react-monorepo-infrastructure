export function toBase64(input: string) {
  return Buffer.from(input).toString('base64');
}

export function toBase64BasicHeader(input: string) {
  return `Basic ${toBase64(`${input}:`)}`;
}
