export default {
    name: 'attribute',
    title: 'Attribute',
    type: 'document',
    fields: [
        { 
            name: 'price', 
            title: 'Price', 
            type: 'number' 
        },
        { 
            name: 'variations', 
            title: 'Variations', 
            type: 'array', 
            of: [{ type: 'string' }] 
        },
        { 
            name: 'dimensions', 
            title: 'Dimensions', type: 'object', 
                fields: [
                    { 
                        name: 'width', 
                        title: 'Width', 
                        type: 'number' 
                    },
                    { 
                        name: 'height', 
                        title: 'Height', 
                        type: 'number' 
                    },
        ]},
        { 
            name: 'manufacturer', 
            title: 'Manufacturer', 
            type: 'string' 
        },
        { 
            name: 'type', 
            title: 'Type', 
            type: 'string' 
        },
        { 
            name: 'application', 
            title: 'Application', 
            type: 'string' 
        },
        { 
            name: 'material', 
            title: 'Material', 
            type: 'string' 
        },
    ],
};