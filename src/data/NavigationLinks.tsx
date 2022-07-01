type NavTypes = {
    id: number,
    path: string,
    name: string,
}

const NavigationLinks: NavTypes[] = [
    {
        id: 1,
        path: '/',
        name: 'Home'
    },
    {
        id: 2,
        path: '/drivers',
        name: 'Drivers'
    },
    {
        id: 3,
        path: '/teams',
        name: 'Teams'
    },
    {
        id: 4,
        path: '/schedule',
        name: 'Schedule'
    },
    {
        id: 5,
        path: '/standings',
        name: 'Standings'
    },
]

export default NavigationLinks;