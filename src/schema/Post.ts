export type Post = Readonly<{
    creator: string
    date: string
    text: string
    likes: number
    comments: any[]
}>
