

const url = {
    BASE_URL :"https://localhost:7277/api",
    CATEGORY:{
        LIST: "/category",
        CREATE: "/category",
        DETAIL: "/category/get-by-id"
    },
    PRODUCT:{
        LIST: "/product",
        DETAIL:"/product/get-by-id",
        RELATEDS:"/product/relateds"
    },
    USER:{
        LOGIN:"/auth/login",
        REGISTER:"/auth/register",
        PROFILE:"/auth/profile",
    }
}
export default url;