import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// ** MUI Imports
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

// ** Demo Components Imports
import CardUser from 'src/views/ui/cards/basic/CardUser';
import CardMembership from 'src/views/ui/cards/basic/CardMembership';
import FreeUserCard from 'src/views/dashboards/ecommerce/FreeUserCard';
import VIPUserCard from 'src/views/dashboards/ecommerce/VIPUserCard';
import ListEnrolledCourses from 'src/views/components/list/ListEnrolledCourses';

// ** Custom Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider';
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';
import { getProfileInfo } from 'src/store/apps/profile';
import { useSelector, useDispatch } from 'react-redux';

const AnalyticsDashboard = () => { 
  // State
  const [user, setUser] = useState();
  const [courses, setCourses] = useState();
  const [subscription, setSubscription] = useState();
  const [isUserVIP, setIsUserVIP] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  // Hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // Fetch user data
  const profileDetails = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfileInfo());
  }, [dispatch]);

  useEffect(() => {
    if (profileDetails?.data.user) {
      setUser(profileDetails?.data?.user);
      setSubscription(profileDetails?.data?.subscription);
      setCourses(profileDetails?.data?.courses);
      setIsUserVIP(profileDetails?.data?.isVipValid);
    }
  }, [profileDetails]);

  // Show dialog only once per user
  useEffect(() => {
    const hasSeenDialog = localStorage.getItem('hasSeenDialog');
    if (!hasSeenDialog) {
      setOpenDialog(true);
      localStorage.setItem('hasSeenDialog', 'true');
    }
  }, []);

  // Close dialog handler
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Youtube
  const playerRef = useRef(null);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    // Load the YouTube Iframe API script if not already loaded
    if (!window.YT) {
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.onload = () => {
        // When the API is ready, initialize the YouTube player
        window.onYouTubeIframeAPIReady = () => {
          playerRef.current = new window.YT.Player('youtube-player', {
            videoId: 'SyoFHS7B9No',
            events: {
              onReady: () => {
                setPlayerReady(true);
              },
            },
          });
        };
      };
      document.body.appendChild(script);
    } else {
      // Initialize the player immediately if the API is already loaded
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: 'SyoFHS7B9No',
        events: {
          onReady: () => {
            setPlayerReady(true);
          },
        },
      });
    }
  }, []);

  // Function to jump to a specific time in the video
  const seekToTime = (seconds) => {
    if (playerReady && playerRef.current && typeof playerRef.current.seekTo === 'function') {
      playerRef.current.seekTo(seconds, true);
    }
  };

  return (
    <ApexChartWrapper dir="ltr">
      <KeenSliderWrapper>
        <Grid container spacing={6}>
          {/* VIP User Card */}
          {!isUserVIP ? (
            <Grid item xs={12} md={6}>
              <FreeUserCard user={user} />
            </Grid>
          ) : (
            <Grid item xs={12} md={6}>
              <VIPUserCard user={user} subscription={subscription} />
            </Grid>
          )}

          <Grid item xs={12} md={6}>
            <CardMembership user={user} />
          </Grid>

          {/* Enrolled Courses */}
          <Grid item xs={12} sm={6} md={12}>
            <Grid title="Enrolled Courses" code={{ tsx: null, jsx: null }}>
              <Typography component="span" variant="h4" sx={{ my: 1, fontWeight: 500, marginBottom: '20px' }}>
                Enrolled Courses
              </Typography>
              <Divider sx={{ my: '20px !important' }} />
              <ListEnrolledCourses courses={courses} user={user} />
            </Grid>
          </Grid>
        </Grid>
      </KeenSliderWrapper>

      {/* Full-Screen Dialog Box */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog} 
        fullWidth 
        maxWidth="xl" // Options: 'xs', 'sm', 'md', 'lg', 'xl'
      >
        <DialogTitle>{t('footer-three-guide')}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className='row'>
              <div className='col-12 col-md-9'>
                <iframe
                  id="youtube-player"
                  src="https://www.youtube.com/embed/SyoFHS7B9No?enablejsapi=1&rel=0&si=GV6rJFFnXlz3GZAC"
                  title="آموزش استفاده از داشبورد و سایت فناوران"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ width: '100%', height: '100%' }}
                ></iframe>
              </div>
              <div className='col-12 col-md-3'>
                {/* Buttons to Jump to Specific Times */}
                <ul className='list-group list-group-flush mt-3 p-0'>
                  <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary w-100' onClick={() => seekToTime(4)}>آموزش ثبت نام در سایت فناوران</button></li>
                  <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary w-100' onClick={() => seekToTime(72)}>چطور دوره های فناوران را قسطی خریداری کنیم؟</button></li>
                  <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary w-100' onClick={() => seekToTime(130)}>چطور دوره های فناوران را بخریم و یا ثبت نام کنیم؟</button></li>
                  <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary w-100' onClick={() => seekToTime(178)}>چطور رمزعبور خود را بازیابی کنیم؟</button></li>
                  <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary w-100' onClick={() => seekToTime(237)}>چطور می توانیم فاکتور خرید را دریافت کنیم؟</button></li>
                  <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary w-100' onClick={() => seekToTime(263)}>چطور اسم و فامیلی خود را در پروفایل ویرایش کنیم؟</button></li>
                  <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary w-100' onClick={() => seekToTime(295)}>چگونه سرتیفیکیت دوره را دریافت کنیم؟</button></li>
                  <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary w-100' onClick={() => seekToTime(358)}>چگونه وارد کلاس آنلاین شویم؟</button></li>
                  <li class="list-group-item p-0 mt-2"><button className='FNV-Btn BtnPrimary w-100' onClick={() => seekToTime(478)}>چگونه به متریال های کلاس دسترسی پیدا کنیم؟</button></li>
                </ul>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </ApexChartWrapper>
  );
};

export default AnalyticsDashboard;
