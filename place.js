const place = document.querySelector(".js-place");
const temp = document.querySelector(".js-temp");

const API_KEY = "7072ff746c6e440b8e44097dce441156";

const COORD_LS = "coordinate";

const saveCoord = (obj) => {
    //stringify의 역할 : 문자열 변환 (LS는 문자열만 저장할 수 있기 때문에)
    const tempStringify = JSON.stringify(obj);
    localStorage.setItem(COORD_LS, tempStringify); //로컬스토리지에 저장, (저장할이름, 저장할객체)
};

const handleGeoSucces = (position) => {
    //현재 내 위치
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const tempObj = {
        latitude,
        longitude,
    };

    saveCoord(tempObj);
    setWeather(latitude, longitude);
};

const handleGeoError = () => {
    console.log("실패");
};

const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError); //postion 자동 반환
};

const setWeather = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then((response) => {
        return response.json(); 
    })
    .then((data) => { 
        temp.innerText = `You are at ${data.name} with a temperature of ${data.main.temp} degrees`;});
};

const loadCoord = () => {
    const loadedCoord = localStorage.getItem(COORD_LS); //저장된 위치 가져오기

    //처음 접속했을 때 저장된 위치가 없음을 예외처리
    if (loadedCoord === null) {
        //좌표를 가지고 온 후에 로컬스토리지에 저장
        getCurrentLocation();

    } else {
        //parse 문자열 js 코드로 변환
        const parsedCoord = JSON.parse(loadedCoord);
        setWeather(parsedCoord.latitude, parsedCoord.longitude);
        //저장된 좌표를 이용하여 날씨 정보를 불러오기  -> 저장 성공 했을때
    }
};

const init2 = () => {
    loadCoord();
};

init2();