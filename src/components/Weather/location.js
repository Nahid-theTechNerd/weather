export const  getLocation = () => {
    let location = [0,0];
    navigator.geolocation.getCurrentPosition(position => {
    const {latitude , longitude} = position.coords;
    location[0] = latitude;
    location[1] = longitude;
})
    return location;
}