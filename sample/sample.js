var data = {
    name: "Shafeeq",
    children: [{
        name: "One",
        children: [{
            name: "One -1",
            children: [{
                name: "One -11"
            }, {
                name: "One -22",
                children: [{
                    name: "One -111",
                    children: [{
                        name: "One -1111"
                    }, {
                        name: "One -2222"
                    }]
                }, {
                    name: "One -222"
                }]
            }]
        }, {
            name: "One -2"
        }]
    }, {
        name: "Two",
        children: [{
            name: "Two -1"
        }, {
            name: "Two -2"
        }]
    }, {
        name: "Three"
    }, {
        name: "Four"
    }]
};


$('.treeHolder').generateTree(data, 'children', 'name');