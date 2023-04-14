export const UserData = [
    {
        id: 1,
        week: 1,
        poids: 69.1,
        cal: 356
    },
    {
        id: 2,
        week: 2,
        poids: 69.5,
        cal: 403
    },
    {
        id: 3,
        week: 3,
        poids: 69.8,
        cal: 370
    },
    {
        id: 4,
        week: 4,
        poids: 70.1,
        cal: 364
    },
    {
        id: 5,
        week: 5,
        poids: 70,
        cal: 370
    },
    {
        id: 6,
        week: 6,
        poids: 69.1,
        cal: 370
    },
    {
        id: 7,
        week: 7,
        poids: 69.15,
        cal: 360
    },
    {
        id: 8,
        week: 8,
        poids: 69.6,
        cal: 420
    },
    {
        id: 9,
        week: 9,
        poids: 70.2,
        cal: 370
    },
    {
        id: 10,
        week: 10,
        poids: 70.5,
        cal: 368
    }
];

export const UserAverageSession = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 40
            },
            {
                day: 3,
                sessionLength: 50
            },
            {
                day: 4,
                sessionLength: 30
            },
            {
                day: 5,
                sessionLength: 30
            },
            {
                day: 6,
                sessionLength: 50
            },
            {
                day: 7,
                sessionLength: 50
            }
        ]
    }
]

export const UserPerformance = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    },
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
]