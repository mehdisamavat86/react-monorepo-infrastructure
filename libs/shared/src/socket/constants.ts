export const SOCKET_TIMEOUT = Number(
  import.meta.env.VITE_SOCKET_TIMEOUT || 5000
);
export const SOCKET_URL =
  import.meta.env.VITE_SOCKET_URL ||
  import.meta.env.VITE_API_BASE_URL?.replace('/api', '') ||
  window.location.origin;
export const SOCKET_ENABLED = import.meta.env.VITE_SOCKET_DISABLED !== 'true';
