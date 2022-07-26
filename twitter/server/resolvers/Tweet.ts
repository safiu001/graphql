import { DatabaseModel, User } from "../model/Model";

export const Tweet = {
    Author: (parent: any, args: any, {db}:{db: DatabaseModel})=>{
        const authorId = parent.author_id
        const { users } = db
        const author = users.find((val)=>val.id === authorId)
        return author
    },
    Stats: (parent: any, args: any, {db}:{db: DatabaseModel})=>{
        const statsId = parent.stat_id
        const {stats} = db
        const stat = stats.find((val)=>val.id === statsId)
        return stat
    }
}