export type GitHubComponentDto = {
  created_at: string;
  description: string;
  group: boolean;
  id: string;
  name: string;
  only_show_if_degraded: boolean;
  position: number;
  showcase: boolean;
  start_date: string;
  status:
    | "operational"
    | "degraded_performance"
    | "partial_outage"
    | "major_outage";
  updated_at: string;
};
