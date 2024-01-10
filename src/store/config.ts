
const getQueryURL = (name: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const config = {
    keyUser : "dataUser",
    keyToken: "TokenData",
    getQueryURL: getQueryURL,
    menuData:[
        {
            id:"dashboard",
            path:"/",
            name:"Tổng quan",
            icon:"mdi-floor-plan",
            category:""
        },
        {
            path:"",
            name:"Học tập",
            category:"nav-category"
        },
        {
            id:"class",
            path:"/class",
            name:"Lớp học",
            icon:"mdi-google-classroom",
            category:""
        },
        {
            id:"exam",
            path:"/exam",
            name:"Kiểm tra",
            icon:"mdi-ab-testing",
            category:""
        },
        {
            id:"result",
            path:"/result",
            name:"Kết quả",
            icon:"mdi-file-table-box-multiple-outline ",
            category:""
        }
    ]
}
export default config;