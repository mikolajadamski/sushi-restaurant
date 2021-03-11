

const checkStatus = response => {
    if(response.ok) {
        console.log(response);
        return response;
    }
    else {
        let error = new Error(response.statusText);
        Error.response = response;
        response.json().then(e => {
            error.error = e;
            console.log(error.error);
        });
        return Promise.reject(error);
    }
}

export const getAllNavbarItems = () => {
    fetch('api/navbar_items').then(checkStatus)
}