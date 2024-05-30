import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckSession = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkSession = async () => {
            try {
                const sessionId = sessionStorage.getItem('id');
                if (!sessionId || sessionId.trim() === '') {
                    navigate('/index.php');
                } else {
                    const response = await axios.get('/api/check-session', {
                        params: { id: sessionId }
                    });

                    if (response.data.redirect) {
                        navigate(response.data.redirect);
                    } else if (response.data.username) {
                        console.log(response.data.username);
                    } else if (response.data.error) {
                        console.error(response.data.error);
                    }
                }
            } catch (error) {
                console.error('Error checking session:', error);
            }
        };

        checkSession();
    }, [navigate]);

    return null; // This component doesn't render anything visible
};

export default CheckSession;
