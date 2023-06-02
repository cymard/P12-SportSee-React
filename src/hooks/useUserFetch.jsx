import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';
import formatApiData from '../utils/formatApiData';
import PropTypes from 'prop-types';
import userDataMock from '../mocks/user_data_mock.json';
import config from '../config';

function useUserFetch(userId, isMock) {
    const [formattedUserData, setFormattedUserData] = useState({ status: false, data: [] });
    const [error, setError] = useState({ status: false, message: '' });
    const [isRequestsExecuted, setIsRequestsExecuted] = useState(false);

    const apiBaseUrl = config.apiUrl + 'user/' + userId;
    const responseUserInformations = useFetch(apiBaseUrl, !isMock);
    const responseUserActivity = useFetch(apiBaseUrl + '/activity', !isMock);
    const responseUserAverageSession = useFetch(apiBaseUrl + '/average-sessions', !isMock);
    const responseUserPerformance = useFetch(apiBaseUrl + '/performance', !isMock);

    useEffect(() => {
        if (isRequestsExecuted) {
            return;
        }

        if (isMock) {
            setIsRequestsExecuted(true);
            const userData = userDataMock.find((userMock) => userMock.id === parseInt(userId));
            if (!userData) {
                setError({ status: true, message: 'Aucune data pour cet id' });
            }
            setFormattedUserData({ status: true, data: userData });
            return;
        }

        let responses = [
            responseUserInformations,
            responseUserActivity,
            responseUserAverageSession,
            responseUserPerformance,
        ];

        if (responses.some((response) => response.isError)) {
            setError({ status: true, message: 'Une erreur est survenue lors de la récupération des données.' });
            setIsRequestsExecuted(true);
            return;
        }

        if (responses.some((response) => response.data == null)) {
            return;
        }

        try {
            let data = new formatApiData(
                responseUserInformations.data,
                responseUserActivity.data,
                responseUserAverageSession.data,
                responseUserPerformance.data
            );

            let formattedData = data.formatData();
            setFormattedUserData({ status: true, data: formattedData });
            setIsRequestsExecuted(true);

            if (error.status) {
                setError({ status: false, message: '' });
            }
        } catch (error) {
            setIsRequestsExecuted(true);
            setError({ status: true, message: error.message });
        }
    }, [responseUserInformations, responseUserActivity, responseUserAverageSession, responseUserPerformance]);

    return { isRequestsExecuted, formattedUserData, error };
}

export default useUserFetch;

useUserFetch.prototype = {
    userId: PropTypes.string.isRequired,
    isMock: PropTypes.bool.isRequired,
};
