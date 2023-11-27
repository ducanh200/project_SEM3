

const url = {
    BASE_URL :"https://localhost:7173/api",
    TOPIC:{
        LIST: "/topic",
        CREATE: "/topic",
        DETAIL: "/topic/get-by-id",
        UPDATE:"/topic",
        DELETE:"/topic",
    },
    COUNTRY:{
        LIST: "/country",
        CREATE: "/country",
        DETAIL: "/country/get-by-id",
        UPDATE:"/country",
        DELETE:"/country",
    },
    PROJECT:{
        LIST: "/project",
        CREATE:"/project",
        UPDATE:"/project",
        DETAIL:"/project/get-by-id",
        RELATEDS:"/project/relateds",
        DELETE:"/project"
    },
    NEWS:{
        LIST: "/news",
        CREATE:"/news",
        UPDATE:"/news",
        DETAIL:"/news/get-by-id",
        RELATEDS:"/news/relateds",
        DELETE:"/news/deleted_news"
    },
    USER:{
        LIST:"/auth",
        LOGIN:"/auth/login",
        REGISTER:"/auth",
        PROFILE:"/auth/profile",
    },
    DONATE:{
        LIST:"/donate",
        CREATE:"/donate/createdonate"
    }
}
export default url;