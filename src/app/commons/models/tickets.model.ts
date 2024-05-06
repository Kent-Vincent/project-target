import { CurrentUserLoggedAvatar, CurrentUserLoggedName } from "./users.model";

export class Tickets{
  constructor (
    ticket_title: string,
    ticket_name: string,
    description: string,
    attachments: string,
    time_elapsed: string,
    avatar_icon: string,
    assignee: string,
    due_date: string,
    priority: string,
    filed_by_avatar_icon: CurrentUserLoggedAvatar[],
    filed_by: CurrentUserLoggedName[],
    cover_photo: string,
  ) {}
}