export interface InvitationData {
  [x: string]: unknown;
  groom: string;
  bride: string;
  date: string;
  time: string;
  dateTime: string;
  venue: string;
  address: string;
  coverImage: string;
  gallery: string[];
  music: string;
  events: {
    time: string;
    title: string;
  }[];
}