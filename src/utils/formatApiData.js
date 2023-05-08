class FormatApiData {
    constructor(userInformations, userActivity, userAverageSession, userPerformance) {
        this.userInformations = userInformations;
        this.userActivity = userActivity;
        this.userAverageSession = userAverageSession;
        this.userPerformance = userPerformance;
    }

    verifyData() {
        let data = [
            this.userInformations.data.id,
            this.userInformations.data.userInfos.firstName,
            this.userInformations.data.userInfos.lastName,
            this.userInformations.data.userInfos.age,
            this.userInformations.data.keyData,
            this.userInformations.data.todayScore ?? this.userInformations.data.score,
            this.userActivity.data.sessions,
            this.userAverageSession.data.sessions,
            this.userPerformance.data.data,
            this.userPerformance.data.kind,
        ];

        if (!data.every((value) => value !== undefined)) {
            throw new Error('Impossible de formatter les données reçues.');
        }
    }

    formatData() {
        this.verifyData();

        return {
            id: this.userInformations.data.id,
            firstName: this.userInformations.data.userInfos.firstName,
            lastName: this.userInformations.data.userInfos.lastName,
            age: this.userInformations.data.userInfos.age,
            keyData: this.userInformations.data.keyData,
            todayScore: this.userInformations.data.todayScore ?? this.userInformations.data.score,
            activitySessions: this.userActivity.data.sessions,
            averageSessions: this.userAverageSession.data.sessions,
            performance: {
                data: this.userPerformance.data.data,
                kind: this.userPerformance.data.kind,
            },
        };
    }
}

export default FormatApiData;
