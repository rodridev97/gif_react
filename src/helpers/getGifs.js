export const getGifs = async ( category ) => {
        
    const apiKey = 'BlZ4HF0E7gEIdqKgPbIqk2mNPs0UPLbz';

    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=${apiKey}`);

    const  { data }  = await resp.json();   

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            images: img.images?.downsized_medium.url
        };      
    });
    
    return gifs;

}