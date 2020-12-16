export interface Email{
  id: number;
  subject: string;
  sender: string;
  body: string;
  tags: Array<string>;
  date: any;
  checked: boolean;
}
