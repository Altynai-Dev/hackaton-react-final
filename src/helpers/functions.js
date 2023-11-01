import axios from "axios";

export const addDataToLocalStorage = (user, tokens) => {
    localStorage.setItem('user', JSON.stringify({email: user}));
    localStorage.setItem('tokens', JSON.stringify(tokens));
};

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('tokens');
};

export const checkUserLogin = () => {
    const user = localStorage.getItem('user');
    if(!user) return false;
    return true;
};

export const checkAdmin = () =>{
    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user);
    if(userObj.email === "slime@admin.su") return true;
    return false;
}

export const updateToken = () => {
    let updateFunc = setInterval(async () => {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
        if(!tokens) return clearInterval(updateFunc);
        const Authorization = `Bearer ${tokens.access}`;
        const { data } = await axios.post("http://34.89.235.149/api/v1/account/refresh/", { refresh: tokens.refresh }, { headers: { Authorization} });
        localStorage.setItem('tokens', JSON.stringify({ refresh: tokens.refresh, access: data.access }));
    }, 1000 * 60 * 9);
};

export const getAccessToken = () =>{
    let tokens = JSON.parse(localStorage.getItem('tokens'));
    return tokens.access;
}

export const getTotalPages = async (url) => {
    const { data } = await axios.get(url);
   const totalPages = Math.ceil(data.count / 10);
    return totalPages;
};

export const getAuthUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
};

// Функция для получения данных о лайках из localStorage
export function getLikedVideos() {
    const likedVideosJSON = localStorage.getItem('likedVideos');
    return likedVideosJSON ? JSON.parse(likedVideosJSON) : [];
}

// Функция для сохранения данных о лайках в localStorage
function setLikedVideos(likedVideos) {
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
}

// Функция для проверки, является ли видео лайкнутым
export function isVideoLiked(slug) {
    const likedVideos = getLikedVideos();
    return likedVideos.includes(slug);
}

export function toggleLike(oneVideo){
    let likedVideos = getLikedVideos();
    if(!isVideoLiked(oneVideo.slug)){
        likedVideos.push(oneVideo.slug)
    }else{
        likedVideos = likedVideos.filter(likedSlug => likedSlug.slug !== oneVideo.slug);
        setLikedVideos(likedVideos)
    }
}

export const getFavoriteData = () => {
    try {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        return favorites;
    } catch (error) {
        console.error("Ошибка при разборе данных из localStorage:", error);
        return [];
    }
};