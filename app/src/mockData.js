const mockData = {
    mockTours: [{
        id: 1,
        name: "Dr. Johnson's 401 Demonstration"
    },
    {
        id: 2,
        name: "History of the Ballona Wetlands"
    }],
    mockPanels : [{
        name: "All About Egrets",
        tours: [1, 2],
        image: undefined,
        html: [
            {
                    tag: "p",
                    string: "All About Egrets",
                    contentStyle: {
                        color: "black",
                        'font-family': "Impact",
                        'font-size': "24px"
                    },
                    id: 1,
                    position: {
                        x: 100,
                        y: 10,
                        z: 1,
                    }
            },
            {
                tag: "p",
                string: "It's a type of bird!",
                contentStyle: {
                    color: "black",
                    'font-family': "Arial",
                    'font-size': "12px"
                },
                id: 2,
                position: {
                    x: 200,
                    y: 100,
                    z: 1,
                }
            },
            {
                tag: "p",
                string: "What is an egret?",
                contentStyle: {
                    color: "black",
                    'font-family': "Arial",
                    'font-size': "12px"
                },
                id: 3,
                position: {
                    x: 0,
                    y: 100,
                    z: 1,
                }
            }]
    },
    {
        name: "The Water Cycle",
        tours: [1],
        image: undefined,
        html: undefined,
    },
    {
        name: "Loyola Marymount University",
        tours: [2],
        image: undefined,
        html: undefined, 
    }]
}
export default mockData