import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing for every enthusiast.',
  description:
    'Get better, more secure, and more safe emails for a fraction of the cost.',
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
      description: 'Blumemail for Small Business can help your business go even further with secure and private email, that just works.',
      price: '$1/Mailbox',
      features: [
        {
          title: '4GB per Mailbox.',
        },
        {
          title: 'OPTIONAL Auto-Delete Routine.',
        },
        {
          title: 'Free Custom Domain Connection.',
        },
        {
          title: 'Data is hosted in a seperate, secure environment.',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license',
      },
    },
  ],
}
