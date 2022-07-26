import { DatabaseModel, Tweet } from "../model/Model";
import { v4 as uuid } from "uuid"

export const Mutation = {
    createTweet: (parent:any, {body}: {body: string}, {db}: {db:DatabaseModel})=>{
        const {tweets} = db
        const tweet: Tweet = {
            id: uuid(),
            body,
            date: new Date(),
            isRead: false,
            author_id: "",
            stat_id: ""
        }
        tweets.push(tweet)
        return tweet
    },
    deleteTweet: (parent:any, {id}: {id: string}, {db}: {db:DatabaseModel})=>{
        let {tweets} = db
        const tweet = tweets.find((tweet)=>tweet.id===id)
        tweets = tweets.filter((val)=>val.id!==id)
        db.tweets = tweets
        return tweet
    },
    markTweetRead: (parent:any, {id}: {id: string}, {db}: {db:DatabaseModel})=>{
        const {tweets} = db
        const tweet = tweets.find((tweet)=>tweet.id===id)
        if(tweet !== undefined)
            tweet.isRead = true
        return true
    }
}