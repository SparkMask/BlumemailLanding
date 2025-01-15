import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Blumemail',
    description: 'Secure email service from SparkMask.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        href: 'https://mail.blumemail.net/SOGo/',
        label: 'Log Into Webmail',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      }
    ],
  },
  footer: {
    copyright: (
      <>
        Copyright &copy; 2025{' '}
        <Link href="https://sparkmask.com">SparkMask</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:contact@staff.blumemail.net',
        label: 'Contact',
      },
      {
        href: 'https://linkedin.com/company/sparkmask',
        label: <FaLinkedin size="14" />,
      },
      {
        href: 'https://github.com/SparkMask',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
