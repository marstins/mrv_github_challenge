const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const BUTTON = document.querySelector('#change-cat');
const CAT_IMG = document.querySelector('#cat');

const GET_CATS = async () => {
    const DATA = await fetch(BASE_URL)
    .then(res => res.json())
    .catch(e => console.log(e.message));
    
    return DATA.webpurl
}

const LOAD_IMG = async () => {
    CAT_IMG.src = await GET_CATS();
}

BUTTON.addEventListener('click', LOAD_IMG);

LOAD_IMG();