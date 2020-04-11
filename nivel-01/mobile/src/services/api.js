import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333',
});

export default api;

//ios com emulador: localhost
//ios com fisico: IP da maquina
//android com emulador: localhost(terá que rodar o comando: adb reverse tcp:3333 tcp:3333)
//android com emulador: 10.0.2.2(Android Studio)
//android com emulador: 10.0.3.2(Genymotion)
//android com fisico: IP da maquina