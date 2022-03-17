import { map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GitHubComponentDto } from "../models";

export function getComponentStatus(): Observable<GitHubComponentDto[]> {
  return ajax<{ components: GitHubComponentDto[] }>(
    "https://www.githubstatus.com/api/v2/summary.json"
  ).pipe(
    map(({ response }) => {
      return response.components;
    })
  );
}
