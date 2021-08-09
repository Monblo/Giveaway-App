const API_URL = 'https://fer-api.coderslab.pl/v1/portfolio/contact';

//post data from contact form to coderslab endpoint
export const postForm = (formData) => {
    fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
    })
        .then((r) => r.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
};