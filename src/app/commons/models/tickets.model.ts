export interface Tickets{
    ticket_title: string,
    description: string,
    attachments: string | null,
    avatar_icon: string | null,
    assignee: string,
    due_date: string,
    priority: string,
    filed_by_avatar_icon: string,
    filed_by: string,
    cover_photo: string | null,
}