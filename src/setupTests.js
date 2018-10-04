jest.mock('redux', () => ({
    combineReducers: jest.fn(),
    applyMiddleware: jest.fn()
        .mockImplementation((data) => data),
    requestPermissions: jest.fn(),
    getFCMToken: jest.fn(() => new Promise((accept, resolve) => accept('FakeToken'))),
    FCMEvent: {
        Notification: 'fakeNotification',
    },
}))