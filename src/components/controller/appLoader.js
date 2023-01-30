import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'c80d0a567b4a4133b9ec467073ff8adc',
        });
    }
}

export default AppLoader;
