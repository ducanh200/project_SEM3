

const url = {
    BASE_URL :"https://localhost:7173/api",
    TOPIC:{
        LIST: "/topic",
        CREATE: "/topic",
        DETAIL: "/topic/get-by-id"
    },
    COUNTRY:{
        LIST: "/country",
        CREATE: "/country",
        DETAIL: "/country/get-by-id"
    },
    PROJECT:{
        LIST: "/project",
        CREATE:"/project",
        DETAIL:"/project/get-by-id",
        RELATEDS:"/project/relateds"
    },
    NEWS:{
        LIST: "/news",
        CREATE:"/news",
        UPDATE:"/news",
        DETAIL:"/news/get-by-id",
        RELATEDS:"/news/relateds"
    },
    USER:{
        LOGIN:"/auth/login",
        REGISTER:"/auth/register",
        PROFILE:"/auth/profile",
    }
}
export default url;