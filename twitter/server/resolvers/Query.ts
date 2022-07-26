import { DatabaseModel } from "../model/Model";

type args = {
    limit: number;
    skip: number;
    sort_field: string;
    sort_order: string
}

export const Query = {
    Tweets: (parent: any, args: args, context: any) => {
        const {limit, skip, sort_field, sort_order} = args
        const { tweets } = context.db
        return tweets
    },
    Tweet: (parent: any, {id}:{id:string}, context: any)=>{
        const {tweets} = context.db
        const tweet = tweets.find((val: any)=>val.id===id)
        return tweet
    },
    User: (parent: any, {id}: {id:string}, {db}: {db:DatabaseModel})=>{
        const {users} = db
        const user = users.find((val)=>val.id===id)
        return user
    },
    Notifications: (parent: any, {limit}: {limit: number}, {db}: {db:DatabaseModel})=>{
        const {notifications} = db
        return notifications.slice(0, limit)
    },
    NotificationsMeta: (parent: any, args: any, {db}: {db:DatabaseModel})=>{
        const {meta} = db
        return meta[0]
    },
    TweetsMeta: (parent: any, args: any, {db}: {db:DatabaseModel})=>{
        const {meta} = db
        return meta[0]
    }
}