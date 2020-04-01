interface TimelineEvent {
  order: number;
  startDate: Moment;
  endDate: Moment | null;
  title: string;
  company: string;
  description?: string;
}

type Timeline = TimelineEvent[];
