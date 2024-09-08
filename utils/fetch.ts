const API_URL = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL;

export function get_data({ url, headers = {}, host = API_URL }: { url: string; headers?: object; host?: string }) {
  if (host == "/") host = "";
  return fetch(`${host}${url}`, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    method: "GET",
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((res) => res);
}

export function fetch_data({ url, method, data, headers = {}, host = API_URL }: { url: string; method: string; data?: object; headers?: object; host?: string }) {
  if (host == "/") host = "";
  return fetch(`${host}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((res) => res);
}
