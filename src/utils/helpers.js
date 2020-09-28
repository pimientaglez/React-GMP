export const listGenres = (genres) => {
    return genres.map((genre, index) => {
        if(index !== genres.length -1) { 
            return genre+' | ';
        } 
        return genre;
    });
};