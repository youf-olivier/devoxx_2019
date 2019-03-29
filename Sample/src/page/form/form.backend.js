import axios from "axios";

const topFalloworsUrl =
  "https://api.github.com/search/users?q=followers:%3E40000&order=desc&sort=followers";
const urlSearch = "https://api.github.com/search/users?q=user:";
export const requestInfoGet = {
  method: "GET",
  crossDomain: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/vnd.github.v3+json"
  }
};

export const fetchUserWithFetch = fetchInt => async user => {
  const url = user ? `${urlSearch}${user}` : topFalloworsUrl;
  const response = await fetchInt(url, requestInfoGet);
  if (response.status !== 200) {
    throw response.statusText;
  }
  return response.data;
};

export const fetchUser = fetchUserWithFetch(axios);
