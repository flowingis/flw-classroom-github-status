import { GitHubComponentDto } from "../models";

export function getComponentStatus(): Promise<GitHubComponentDto[]> {
  return fetch("https://www.githubstatus.com/api/v2/summary.json")
    .then(response => response.json())
    .then(json => json.components);
}
