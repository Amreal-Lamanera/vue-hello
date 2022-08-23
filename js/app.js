const app = new Vue(
    {
        el: '#root',
        data: {
            titolo: 'Lama Portfolio',
            alt: 'Lama logo',
            src: 'lama.PNG',
            logo: 'logo',
            link: 'https://lama-homepage.netlify.app/',
            titleClass: 'main-title',
            aClass: 'my-link',
            zoomClass: ''
        },
        methods: {
            zoom() {
                this.zoomClass = 'zoom'
            },
            unZoom() {
                this.zoomClass = ''
            }
        },
    }
);