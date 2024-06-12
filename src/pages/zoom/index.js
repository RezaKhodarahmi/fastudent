import React, { useState, useEffect } from 'react';
import ZoomMeeting from 'src/views/zoom/ZoomMeeting';

const Home = () => {
  const [signature, setSignature] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const meetingNumber = '7506505500'; // Ensure no spaces
  const sdkKey = '9IWKSZtSpaWVFX7CTIaQw';

  const userName = 'Reza';
  const userEmail = 'mrkhodarahmii@gmail.com';
  const passWord = ''; // Leave empty if no password

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('http://localhost:3200/api/v1/zoom/check-auth', { credentials: 'include' });
      const data = await response.json();
      console.log('Check Auth Data:', data);
      setIsAuthenticated(data.isAuthenticated);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchSignature = async () => {
        const response = await fetch(
          `http://localhost:3200/api/v1/zoom/generate-signature?meetingNumber=${meetingNumber}&role=0`,
          { credentials: 'include' }
        );
        const data = await response.json();
        console.log('Generate Signature Response:', data);
        setSignature(data.signature);
      };

      fetchSignature();
    }
  }, [isAuthenticated, meetingNumber]);

  return (
    <div>
      {!isAuthenticated ? (
        <a href='http://localhost:3200/api/v1/zoom/auth'>Login with Zoom</a>
      ) : (
        signature && (
          <ZoomMeeting
            meetingNumber={meetingNumber}
            userName={userName}
            userEmail={userEmail}
            passWord={passWord}
            signature={signature}
            apiKey={sdkKey}
          />
        )
      )}
    </div>
  );
};


Home.guestGuard = true

export default Home
