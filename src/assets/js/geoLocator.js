import * as axios from 'axios';

async function getGeoLevelsForLonLat(lon, lat, sumlevs) {
    const endpoint = `https://api.censusreporter.org/1.0/geo/search?lat=${lat}&lon=${lon}&sumlevs=${sumlevs}`;
    const response = await axios.get(endpoint);
    return response;
}
const bingkey = 'Av5Xz1StJqYVG1xZzzxBeAHDrtuBi7DajvjV94sgxRdJAucbrhvpSPQTOB0dn1Uz';

async function getDetailForAddress(address) {
    // URI-encode and trim query string before passing to URI
    const addressEncoded = encodeURIComponent(address.trim());
    const endpoint = `https://dev.virtualearth.net/REST/v1/Locations?q=${addressEncoded}&maxResults=1&key=${bingkey}`;
    console.log('endpoint', endpoint);
    const response = await axios.get(endpoint);
    if (response.data.resourceSets[0].resources.length > 0) {
        return response;
    }
    throw Error('No point found');
}

async function getDetailForZip(zip) {
    // Assume the provided zip is valid. Handle error downstream. (e.g. use valid-zip list)
    const endpoint = `https://dev.virtualearth.net/REST/v1/Locations?q=${zip.trim()}&maxResults=1&key=${bingkey}`;
    const response = await axios.get(endpoint);
    return response;
}

export { getGeoLevelsForLonLat, getDetailForAddress, getDetailForZip };

// mapbox
// const mapboxToken = 'pk.eyJ1IjoiY2Vuc3VzcmVwb3J0ZXIiLCJhIjoiQV9hS01rQSJ9.wtsn0FwmAdRV7cckopFKkA';
// const mapboxToken =
// 'pk.eyJ1IjoiYXNpZm0iLCJhIjoiNmJkZmNhNmUwZWI4YmMwMTM2Y2Y4NjQ4NjM0Nzg1MWEifQ.SntXBB_ZwOFBy5GbtmbeZg';

// const endpoint = `https://api.tiles.mapbox.com/v4/geocode/mapbox.places/${
//     query
// }.json?access_token=${ mapboxToken }&country=us`;

// const query = `Zip code ${ zip }`;
// const endpoint = `https://api.tiles.mapbox.com/v4/geocode/mapbox.places/${
//     query
// }.json?access_token=${ mapboxToken }&country=us`;

// For testing
// getDetailForAddress( 'UCLA, CA' )
// .then( r => console.log( r.data.resourceSets[ 0 ].resources[ 0 ].address.formattedAddress ) );

// getDetailForZip( '22903' ).then( console.log );
