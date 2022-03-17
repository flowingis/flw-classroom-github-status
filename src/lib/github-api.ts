import { GitHubComponentDto } from "../models";

export function getComponentStatus(
  onSuccess: (component: GitHubComponentDto[]) => void,
  onError: (error: Error) => void
): void {
  fetch("https://www.githubstatus.com/api/v2/summary.json")
    .then(response => response.json())
    .then(json => onSuccess(json.components))
    .catch(onError);
}
