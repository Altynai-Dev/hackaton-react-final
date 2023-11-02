export const getFavoriteData = () => {
    try {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        return favorites;
    } catch (error) {
        console.error("Ошибка при разборе данных из localStorage:", error);
        return [];
    }
};

export const deleteFavorite = (favObg) => {
    let favorites = getFavoriteData();
    favorites = favorites.filter(item => item.slug !== favObg.slug);
    localStorage.setItem('favorites', JSON.stringify(favorites));
};