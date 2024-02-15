export const pages = {
    home: {title: '', contents: []},
    'what-we-do': {title: 'What we do', contents: []},
    articles: {title: 'Articles', contents: []},
    blogs: {title: 'Blogs', contents: []},
    'about-us': {title: 'About us', contents: []},
    'contact-us': {title: 'Contact us', contents: []},
    partnerships: {title: 'Partnerships', contents: []},
    'privacy-policy': {title: 'Privacy policy', contents: []},
    'code-of-conduct': {title: 'Code of conduct', contents: []},
    error: {
        title: 'Error',
        contents: [{
            widget: 'TextContent',
            styles: {width: 'Center'},
            data: [
                {type: 'h2', text: 'Page not found'},
                {
                    type: 'p',
                    text: 'Oops! It seems like the page you were trying to find isn\'t around anymore (or at least isn\'t here).'
                },
                {type: 'p', text: ''},
                {type: 'h2', text: 'What next? '},
                {type: 'p', text: 'Try checking the URL for errors, or hit the back button on your browser.'}
            ]
        }]
    }
}
