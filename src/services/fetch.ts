/* eslint-disable */

import fetch from "isomorphic-unfetch";

export default async function <JSON = any>(
  input: any,
  init: any
): Promise<any> {
  const res = await fetch(input, {
    ...init,
    headers: {
      "Accept-Language": "pt-br",
      ...(init.headers ? init.headers : {}),
    },
  });

  try {
    const data = await res.json();

    return {
      data,
    };
  } catch (error) {
    return {};
  }
}
