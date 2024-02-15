import type {PageContent} from '../src/components/templates'

export const pages: Record<string, PageContent> = {
  home: {
    title: '',
    contents: [
      {
        widget: 'HeroBanner',
        data: {
          title: 'Robotutor Tech',
          bg: 'color',
          color: 'skyblue',
          image: {
            src: 'https://www.robotutortech.com/wp-content/themes/boostup-business/assets/images/inner-banner.jpg',
            alt: 'what-we-do'
          },
        }
      }
    ]
  },
  'what-we-do': {
    title: 'What we do',
    contents: [
      {
        widget: 'HeroBanner',
        data: {
          title: 'What we do',
          bg: 'color',
          color: 'skyblue',
          image: {
            src: 'https://www.robotutortech.com/wp-content/themes/boostup-business/assets/images/inner-banner.jpg',
            alt: 'what-we-do'
          },
        }
      }
    ]
  },
  articles: {
    title: 'Articles', contents: [
      {
        widget: 'HeroBanner',
        data: {
          title: 'Articles',
          bg: 'color',
          color: 'skyblue',
          image: {
            src: 'https://www.robotutortech.com/wp-content/themes/boostup-business/assets/images/inner-banner.jpg',
            alt: 'what-we-do'
          },
        }
      }
    ]
  },
  blogs: {
    title: 'Blogs', contents: [
      {
        widget: 'HeroBanner',
        data: {
          title: 'Blogs',
          bg: 'color',
          color: 'skyblue',
          image: {
            src: 'https://www.robotutortech.com/wp-content/themes/boostup-business/assets/images/inner-banner.jpg',
            alt: 'what-we-do'
          },
        }
      }
    ]
  },
  'about-us': {
    title: 'About us', contents: [
      {
        widget: 'HeroBanner',
        data: {
          title: 'About us',
          bg: 'color',
          color: 'skyblue',
          image: {
            src: 'https://www.robotutortech.com/wp-content/themes/boostup-business/assets/images/inner-banner.jpg',
            alt: 'what-we-do'
          },
        }
      }
    ]
  },
  'contact-us': {
    title: 'Contact us', contents: [
      {
        widget: 'HeroBanner',
        data: {
          title: 'Contact us',
          bg: 'color',
          color: 'skyblue',
          image: {
            src: 'https://www.robotutortech.com/wp-content/themes/boostup-business/assets/images/inner-banner.jpg',
            alt: 'what-we-do'
          },
        }
      }
    ]
  },
  partnerships: {
    title: 'Partnerships', contents: [
      {
        widget: 'HeroBanner',
        data: {
          title: 'Partnerships',
          bg: 'color',
          color: 'skyblue',
          image: {
            src: 'https://www.robotutortech.com/wp-content/themes/boostup-business/assets/images/inner-banner.jpg',
            alt: 'what-we-do'
          },
        }
      }
    ]
  },
  'privacy-policy': {
    title: 'Privacy policy', contents: [
      {
        widget: 'HeroBanner',
        data: {
          title: 'Privacy policy',
          bg: 'color',
          color: 'skyblue',
          image: {
            src: 'https://www.robotutortech.com/wp-content/themes/boostup-business/assets/images/inner-banner.jpg',
            alt: 'what-we-do'
          },
        }
      }
    ]
  },
  'code-of-conduct': {
    title: 'Code of conduct', contents: [
      {
        widget: 'HeroBanner',
        data: {
          title: 'Code of conduct',
          bg: 'color',
          color: 'skyblue',
          image: {
            src: 'https://www.robotutortech.com/wp-content/themes/boostup-business/assets/images/inner-banner.jpg',
            alt: 'what-we-do'
          },
        }
      }
    ]
  },
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
