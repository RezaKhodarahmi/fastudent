// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Badge from '@mui/material/Badge'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Third Party Components
import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const data = [
  {
    title: 'Tours',
    img: '/images/cards/graphic-illustration-1.png',
    details: {
      Sessions: '0',
      'Page Views': '0',
      Leads: '0',
      Conversions: '0'
    }
  },
  {
    title: 'Bookings',
    img: '/images/cards/graphic-illustration-2.png',
    details: {
      Spend: '0',
      Orders: '0',
      Order: '0',
      Items: '0'
    }
  },
  {
    title: 'Customers',
    img: '/images/cards/graphic-illustration-3.png',
    details: {
      Direct: '0',
      Organic: '0',
      Referral: '0',
      Campaign: '0'
    }
  },
  {
    title: 'Revenue Sources',
    img: '/images/cards/graphic-illustration-2.png',
    details: {
      Direct: '0',
      Organic: '0',
      Referral: '0',
      Campaign: '0'
    }
  }
]

const CardTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.6,
  fontWeight: 500,
  fontSize: '1.125rem',
  letterSpacing: '0.15px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.25rem'
  }
}))

const Slides = ({ theme }) => {
  return (
    <>
      {data.map((slide, index) => {
        return (
          <Box
            key={index}
            className='keen-slider__slide'
            sx={{ p: 6, '& .MuiTypography-root': { color: 'common.white' } }}
          >
            <CardTitle>{slide.title}</CardTitle>
            <Typography variant='body2' sx={{ mb: 4 }}>
              Total 10% Conversion Rate
            </Typography>
            <Grid container>
              <Grid item xs={12} sm={12} sx={{ order: [2, 1] }}>
                <Typography sx={{ mb: 4, fontWeight: 500 }}>{slide.title}</Typography>
                <Grid container spacing={4.5}>
                  {Object.keys(slide.details).map((key, index) => {
                    return (
                      <Grid item key={index} xs={6}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CustomAvatar
                            color='primary'
                            variant='rounded'
                            sx={{
                              mr: 2,
                              width: 48,
                              height: 30,
                              fontSize: '0.875rem',
                              color: 'common.white',
                              backgroundColor: 'primary.dark'
                            }}
                          >
                            {slide.details[key]}
                          </CustomAvatar>
                          <Typography noWrap>{key}</Typography>
                        </Box>
                      </Grid>
                    )
                  })}
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  order: [1, 2],
                  textAlign: 'center',
                  '& img': {
                    height: '160px !important',
                    maxWidth: 'none !important',
                    [theme.breakpoints.up('sm')]: {
                      top: '50%',
                      position: 'absolute',
                      right: theme.spacing(6),
                      transform: 'translateY(-50%)'
                    }
                  }
                }}
              >
                <img src={slide.img} alt={slide.title} />
              </Grid>
            </Grid>
          </Box>
        )
      })}
    </>
  )
}

const AnalyticsWebsiteAnalyticsSlider = () => {
  // ** States
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // ** Hook
  const theme = useTheme()

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      rtl: theme.direction === 'rtl',
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      }
    },
    [
      slider => {
        let mouseOver = false
        let timeout

        const clearNextTimeout = () => {
          clearTimeout(timeout)
        }

        const nextTimeout = () => {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  return (
    <Card sx={{ position: 'relative', backgroundColor: 'primary.main' }}>
      {loaded && instanceRef.current && (
        <Box className='swiper-dots' sx={{ top: 4, right: 6, position: 'absolute' }}>
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map(idx => {
            return (
              <Badge
                key={idx}
                variant='dot'
                component='div'
                className={clsx({ active: currentSlide === idx })}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                sx={{
                  mr: `${theme.spacing(3.5)} !important`,
                  '& .MuiBadge-dot': {
                    width: '8px !important',
                    height: '8px !important',
                    backgroundColor: `${hexToRGBA(theme.palette.common.white, 0.4)} !important`
                  },
                  '&.active .MuiBadge-dot': {
                    backgroundColor: `${theme.palette.common.white} !important`
                  }
                }}
              />
            )
          })}
        </Box>
      )}
      <Box ref={sliderRef} className='keen-slider'>
        <Slides theme={theme} />
      </Box>
    </Card>
  )
}

export default AnalyticsWebsiteAnalyticsSlider
