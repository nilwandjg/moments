export interface Moment {
    id?: number;
    title: string;
    description: string;
    image: string;
    create_at?: string;
    uptaded_at?: string;
    comments?: [{ text: string; username: string }];
}