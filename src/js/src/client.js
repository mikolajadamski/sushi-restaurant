

const checkStatus = response => {
    if(response.ok) {
        return response;
    }
    else {
        let error = new Error(response.statusText);
        Error.response = response;
        response.json().then(e => {
            error.error = e;
        });
        return Promise.reject(error);
    }
}

export const getAllNavbarItems = () => {
    fetch('api/v1/navbar_items').then(checkStatus)
}