import type {PageContent} from '../src/components/templates'

export const pages: Record<string, PageContent> = {
  home: {
    title: '',
    contents: [
      {
        widget: 'HeroBanner',
        data: {
          title: 'Unlock your \'Innovation Spirit\'',
          bg: 'color',
          color: 'skyblue',
          image: {
            src: 'https://www.robotutortech.com/wp-content/themes/boostup-business/assets/images/inner-banner.jpg',
            alt: 'what-we-do'
          },
        }
      },
      {
        widget: 'TextContent',
        styles: {width: 'Center'},
        data: [
          {type: 'body1', text: ''},
          {type: 'h2', text: 'For education'},
          {
            type: 'body1',
            text: 'At Robotutor Tech, we are dedicated to bringing the world of robotics education to your doorstep. Our mission is to inspire and empower students of all ages to explore the fascinating realm of robotics in the comfort of their homes. Whether you’re a beginner eager to grasp the basics or an enthusiast aiming to master advanced concepts, our dedicated team of tutors is here to guide you on your robotics journey.'
          },
          {
            type: 'body1',
            text: 'We envision a future where every individual has the opportunity to unlock their potential in robotics. We believe in making this cutting-edge field accessible to all, fostering a passion for innovation and problem-solving from the comfort of one’s own home.'
          },
          {type: 'body1', text: ''},
          {type: 'h2', text: 'For industry'},
          {
            type: 'body1',
            text: 'At Robotutor Tech, we are a premier robotics and IoT consultancy company dedicated to helping businesses harness the power of cutting-edge technology. With a focus on strategy, design, and software engineering, we enable enterprises and technology disruptor\'s worldwide to thrive in the digital age.'
          },
          {
            type: 'body1',
            text: 'In a world where digital disruption is constant, our team at Robotutor Tech stands ready to assist. As a startup diving into the exciting world of robotics and IoT consultancy with a fresh perspective, we are fueled by passion, innovation, and a drive to make a difference. While we may be new to the scene, we offer expertise in improving our clients’ responsiveness to change, unlocking new value through data and AI, building adaptable technology platforms aligned with business strategies, and delivering exceptional digital products and experiences at scale.'
          },
          {
            type: 'body1',
            text: 'Partner with us at Robotutor Tech to navigate the complexities of the modern technological landscape and achieve success in the digital era.'
          }
        ]
      },
      {
        widget: 'TextWithCTA',
        data: {link: '/contact-us', ctaText: 'Get in touch', text: 'Transform your robotics journey'}
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
      },
      {
        widget: 'TextContent',
        styles: {width: 'Center'},
        data: [
          {type: 'body1', text: ''},
          {type: 'h2', text: 'For education'},
          {
            type: 'body1',
            text: 'At Robotutor Tech, we are dedicated to bringing the world of robotics education to your doorstep. Our mission is to inspire and empower students of all ages to explore the fascinating realm of robotics in the comfort of their homes. Whether you’re a beginner eager to grasp the basics or an enthusiast aiming to master advanced concepts, our dedicated team of tutors is here to guide you on your robotics journey.'
          },
          {
            type: 'body1',
            text: 'We envision a future where every individual has the opportunity to unlock their potential in robotics. We believe in making this cutting-edge field accessible to all, fostering a passion for innovation and problem-solving from the comfort of one’s own home.'
          },
          {type: 'body1', text: ''},
          {type: 'h2', text: 'For industry'},
          {
            type: 'body1',
            text: 'At Robotutor Tech, we are a premier robotics and IoT consultancy company dedicated to helping businesses harness the power of cutting-edge technology. With a focus on strategy, design, and software engineering, we enable enterprises and technology disruptor\'s worldwide to thrive in the digital age.'
          },
          {
            type: 'body1',
            text: 'In a world where digital disruption is constant, our team at Robotutor Tech stands ready to assist. As a startup diving into the exciting world of robotics and IoT consultancy with a fresh perspective, we are fueled by passion, innovation, and a drive to make a difference. While we may be new to the scene, we offer expertise in improving our clients’ responsiveness to change, unlocking new value through data and AI, building adaptable technology platforms aligned with business strategies, and delivering exceptional digital products and experiences at scale.'
          },
          {
            type: 'body1',
            text: 'Partner with us at Robotutor Tech to navigate the complexities of the modern technological landscape and achieve success in the digital era.'
          },
          {type: 'body1', text: ''}
        ]
      },
      {
        widget: 'TextWithCTA',
        data: {
          text: 'Want to talk to us about your robotics journey?',
          link: '/contact-us',
          ctaText: 'Contact us'
        }
      }
    ]
  },
  articles: {
    title: 'Articles',
    contents: [
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
          type: 'body1',
          text: 'Oops! It seems like the page you were trying to find isn\'t around anymore (or at least isn\'t here).'
        },
        {type: 'body1', text: ''},
        {type: 'h2', text: 'What next? '},
        {type: 'body1', text: 'Try checking the URL for errors, or hit the back button on your browser.'}
      ]
    }]
  }
}
