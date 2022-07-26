export const db = {
    tweets: [
        {
            id: "1",
            body: "The elevator to success is out of order. You’ll have to use the stairs, one step at a time.",
            date: new Date(),
            author_id: "101",
            stat_id: "201",
            isRead: false
        },
        {
            id: "2",
            body: "DO or Dont. There is no try",
            date: new Date(),
            author_id: "102",
            stat_id: "202",
            isRead: false
        }
    ],

    users: [
        {
            id: "101",
            username: "michael",
            first_name: "Michael",
            last_name: "Scott",
            full_name: "Michael Scott",
            avatar_url: ""
        },
        {
            id: "102",
            username: "kevin",
            first_name: "Kevin",
            last_name: "Malone",
            full_name: "Kevin Malone",
            avatar_url: ""
        }
    ],

    stats: [
        {
            id: "201",
            views: "890",
            likes: "520",
            retweets: "120",
            responses: "90"
        },
        {
            id: "202",
            views: "860",
            likes: "480",
            retweets: "110",
            responses: "90"
        }
    ],

    notifications: [
        {
            id: "1",
            date: new Date(),
            type: "retweets"
        },
        {
            id: "",
            date: new Date(),
            type: "likes"
        }
    ],

    meta: [
        {
            count: 21
        }
    ]
}