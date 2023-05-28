import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';
import formatApiData from '../utils/formatApiData';
import PropTypes from 'prop-types';
import userDataMock from '../mocks/user_data_mock.json';

function useUserFetch(userId, isMock) {
    const [formattedUserData, setFormattedUserData] = useState({ status: false, data: [] });
    const [error, setError] = useState({ status: false, message: '' });
    const [isRequestsExecuted, setIsRequestsExecuted] = useState(false);

    const apiBaseUrl = 'http://localhost:3001/user/' + userId;
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
            setFormattedUserData({ status: true, data: userDataMock });
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
