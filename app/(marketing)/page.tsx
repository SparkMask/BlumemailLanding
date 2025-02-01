'use client'

import {
  Box,
  Container,
  Stack
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import * as React from 'react'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import { FallInPlace } from '#components/motion/fall-in-place'
import { AnnouncementBanner } from '#components/announcement-banner'


const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <AnnouncementBanner title={'This website is now archived.'} description={''} href={''} />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          
          <Hero
            id="home"
            justifyContent="flex-middle"
            px="0"
            title={
              <FallInPlace>
                B̵l̸u̴m̷e̵m̵a̸i̸l̸ ̵i̷s̵ ̶n̶o̶w̷
                <Br /> d̴i̸s̸c̸o̷n̴t̷i̵n̶u̵e̸d̵.̷
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                This is in due to issues maintaining the service. <Link href={'https://blog.sparkmask.com/posts/blumemail-discontinued'}>Find out why here</Link>.
              </FallInPlace>
            }
          >
          </Hero>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home
