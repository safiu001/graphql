export type DatabaseModel = {
    tweets: Tweet[],
    users: User[],
    stats: Stat[],
    notifications: Notification[],
    meta: Meta[]
}

export type Tweet = {
    id: string,
    body: string,
    date: Date,
    author_id: string,
    stat_id: string,
    isRead: boolean
}

export type User = {
    id: string,
    username: string,
    first_name: string,
    last_name: string,
    full_name: string,
    avatar_url: string
}

export type Stat = {
    id: string,
    views: string,
    likes: string,
    retweets: string,
    responses: string
}

export type Notification = {
    id: string,
    date: Date,
    type: string
}

export type Meta = {
    count: number
}