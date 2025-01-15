import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for every stage',
  description:
    'Pay once and get life-time access to our high quality components.',
  plans: [
    {
      id: 'bronze',
      title: 'Blumemail Bronze',
      description: 'Our cheapest plan, with all the power of Blumemail.',
      price: '$3',
      features: [
        {
          title: 'Lightweight Emails',
        },
        {
          title: 'Customer Support (Email, Phone, Live Chat)',
        },
        {
          title: 'Privacy Commitment Guarantee',
        },
        {
          title: 'Easy to use SOGo webmail.',
        },
        {
          title: 'Support for external mail clients.',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'silver',
      title: 'Blumemail Silver',
      description: 'More Storage, More Power.',
      price: '$5',
      isRecommended: true,
      features: [
        {
          title: 'Lightweight Emails',
        },
        {
          title: 'Customer Support (Email, Phone, Live Chat)',
        },
        {
          title: 'Privacy Commitment Guarantee',
        },
        {
          title: 'Easy to use SOGo webmail.',
        },
        {
          title: 'Support for external mail clients.',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license',
      },
    },
    {
      id: 'smallbus',
      title: 'Small Business',
      description: '[Description.]',
      price: '$1/Mailbox',
      features: [
        {
          title: '[Feature 1]',
        },
        {
          title: '[Feature 2]',
        },
        {
          title: '[Feature 3]',
        },
        {
          title: '[Feature 4]',
        },
        null,
        {
          title: '[Special Feature 1]',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license',
      },
    },
  ],
}
