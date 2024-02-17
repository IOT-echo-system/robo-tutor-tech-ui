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
            src: '/img/banner.jpg',
            alt: 'what-we-do'
          },
        }
      },
      {
        widget: 'TextContent',
        styles: {width: 'Center'},
        data: [
          {type: 'body1', text: ''},
          {
            type: 'h2',
            text: 'Welcome to Robotutor Tech - Your Partner in Robotics and Industrial Automation'
          },
          {type: 'body1', text: ''},
          {
            type: 'body1',
            text: 'At Robotutor Tech, we are dedicated to bringing the world of robotics and industrial automation to your fingertips. Whether you\'re a student eager to learn or a business looking to innovate, we have the tools, expertise, and passion to help you succeed.'
          },
          {type: 'body1', text: ''},
        ]
      },
      {
        widget: 'ContentCards',
        data: {
          title: 'Our Services',
          cards: [
            {
              title: 'Robotics Tutoring',
              image: {src: '/img/banner.jpg', alt: 'Tutoring'},
              content: 'Our personalized tutoring sessions bring robotics education right to your doorstep. Our experienced tutors will guide you through hands-on learning experiences, making robotics fun and accessible for all ages.'
            },
            {
              title: 'Industrial Automation Consultancy',
              image: {src: '/img/banner.jpg', alt: ''},
              content: 'For businesses seeking to streamline their operations and increase efficiency, our consultancy services offer tailor-made solutions using the latest automation technologieConsultancys.'
            },
          ]
        }
      },
      {
        widget: 'TextContent',
        styles: {width: 'Center'},
        data: [
          {type: 'body1', text: ''},
          {type: 'body1', text: ''},
          {type: 'body1', text: ''},
        ]
      },
      {
        widget: 'ContentCards',
        data: {
          title: 'Why Choose Robotutor Tech?',
          cards: [
            {
              title: 'Experience',
              image: {src: '/img/banner.jpg', alt: 'Experience'},
              content: 'With years of experience in robotics and industrial automation, we have the knowledge and expertise to help you achieve your goals.'
            },
            {
              title: 'Innovation',
              image: {src: '/img/banner.jpg', alt: 'Innovation'},
              content: 'We are constantly exploring new technologies and techniques to ensure that our services are at the forefront of innovation.'
            },
            {
              title: 'Passion',
              image: {src: '/img/banner.jpg', alt: 'Passion'},
              content: 'Robotics is more than just a job for us - it\'s our passion. We are dedicated to inspiring the next generation of innovators and problem-solvers.'
            },
          ]
        }
      },
      {
        widget: 'TextContent',
        styles: {width: 'Center'},
        data: [
          {type: 'body1', text: ''},
          {type: 'h2', text: 'Get Started Today'},
          {
            type: 'body1',
            text: 'Whether you\'re a student looking to explore the exciting world of robotics or a business seeking to automate your processes, Robotutor Tech is here to help. Contact us today to learn more about our services and how we can help you succeed.'
          },
          {type: 'body1', text: ''},
          {type: 'body1', text: ''},
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
      },
      {
        widget: 'TextContent',
        styles: {width: 'Center'},
        data: [
          {type: 'body1', text: ''},
          {
            type: 'body1',
            text: 'At Robotutor Tech, we are passionate about robotics and education. Founded with the vision of making robotics accessible to all, we offer personalized tutoring sessions and consultancy services in the fields of robotics and industrial automation.'
          },
          {type: 'body1', text: ''},
          {type: 'h2', text: 'Our Mission'},
          {
            type: 'body1',
            text: 'Our mission is to foster innovation and problem-solving skills by bringing robotics education to students\' homes. We believe that hands-on learning is the key to unlocking creativity and preparing the next generation for the challenges of tomorrow.'
          },
          {type: 'body1', text: ''},
        ]
      },
      {
        widget: 'ContentCards',
        data: {
          title: 'Why Choose Us?',
          cards: [
            {
              title: 'Experienced Tutors',
              image: {src: '/img/banner.jpg', alt: 'Experienced Tutors'},
              content: 'Our tutors are experts in their field, with years of experience in robotics and industrial automation.'
            },
            {
              title: 'Personalized Learning',
              image: {src: '/img/banner.jpg', alt: 'Personalized Learning'},
              content: 'We tailor our tutoring sessions to meet the unique needs of each student, ensuring that they get the most out of their experience.'
            },
            {
              title: 'Comprehensive Curriculum',
              image: {src: '/img/banner.jpg', alt: 'Comprehensive Curriculum'},
              content: 'Our curriculum covers a wide range of topics, from basic robotics principles to advanced industrial automation techniques.'
            },
            {
              title: 'Flexible Scheduling',
              image: {src: '/img/banner.jpg', alt: 'Flexible Scheduling'},
              content: 'We understand that every student has different scheduling needs, which is why we offer flexible tutoring sessions to fit your schedule.'
            },
          ]
        }
      },
      {
        widget: 'TextContent',
        styles: {width: 'Center'},
        data: [
          {type: 'body1', text: ''},
          {type: 'h2', text: 'Get in Touch'},
          {
            type: 'body1',
            text: 'Whether you\'re a student looking to explore the world of robotics or a business seeking to implement automation solutions, Robotutor Tech is here to help. Contact us today to learn more about our services and how we can help you achieve your goals.'
          },
          {type: 'body1', text: ''},

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
      },
      {
        widget: 'TextContent',
        styles: {width: 'Center'},
        data: [
          {type: 'body1', text: ''},
          {
            type: 'body1',
            text: 'This Privacy Policy explains how Robotutor Tech ("we", "us", or "our") collects, uses, and discloses information about you when you access or use our website or services.'
          },
          {type: 'body1', text: ''},
          {type: 'h2', text: 'Information We Collect'},
          {
            type: 'body1',
            text: 'We may collect certain personal information about you when you use our website or services. This information may include:'
          },
          {
            type: 'body1',
            text: '  ●  Contact Information: such as your name, email address, phone number, and mailing address.'
          },
          {type: 'body1', text: '  ●  Demographic Information: such as your age, gender, and location.'},
          {
            type: 'body1',
            text: '  ●  Payment Information: such as your credit card details or other payment information.'
          },
          {
            type: 'body1',
            text: '  ●  Usage Information: such as your IP address, browser type, operating system, and device information.'
          },
          {type: 'body1', text: '  ●  Other Information: any other information you choose to provide to us.'},
          {type: 'body1', text: ''},
          {type: 'h2', text: 'How We Use Your Information'},
          {type: 'body1', text: 'We may use the information we collect for various purposes, including:'},
          {type: 'body1', text: '  ●  Providing and managing our services to you.'},
          {type: 'body1', text: '  ●  Communicating with you about our services and promotions.'},
          {type: 'body1', text: '  ●  Improving our website and services.'},
          {type: 'body1', text: '  ●  Personalizing your experience on our website.'},
          {type: 'body1', text: '  ●  Analyzing trends and statistics.'},
          {type: 'body1', text: ''},
          {type: 'h2', text: 'Information Sharing'},
          {
            type: 'body1',
            text: 'We may share your information with third parties for the following purposes:'
          },
          {
            type: 'body1',
            text: '  ●  Service Providers: we may share your information with third-party service providers who help us provide our services to you.'
          },
          {
            type: 'body1',
            text: '  ●  Legal Requirements: we may disclose your information in response to a subpoena, court order, or other legal process.'
          },
          {
            type: 'body1',
            text: '  ●  Protection of Rights: we may disclose your information to protect and defend our rights or property.'
          },
          {type: 'body1', text: ''},
          {type: 'h2', text: 'Data Retention'},
          {
            type: 'body1',
            text: 'We will retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.'
          },
          {type: 'body1', text: ''},
          {type: 'h2', text: 'Your Choices'},
          {
            type: 'body1',
            text: 'You may choose not to provide certain personal information, but this may limit your ability to use our services or access certain features of our website.'
          },
          {type: 'body1', text: ''},
          {type: 'h2', text: 'Changes to This Privacy Policy'},
          {
            type: 'body1',
            text: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.'
          },
          {type: 'body1', text: ''},
          {type: 'h2', text: 'Contact Us'},
          {
            type: 'body1',
            text: 'If you have any questions about this Privacy Policy, please contact us at contact@robotutortech.com.'
          },
          {
            type: 'body1',
            text: ''
          },
        ]
      },
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
        {type: 'body1', text: ''},
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
