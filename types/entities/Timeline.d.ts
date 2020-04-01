interface TimelineEvent {
  order: number;
  startDate: Moment;
  endDate: Moment | null;
  title: string;
  company: string;
  description?: any;
}

type Timeline = TimelineEvent[];
