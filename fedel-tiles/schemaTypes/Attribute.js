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
            name: 'isDiscounted', 
            title: 'Is Discounted', 
            type: 'boolean' 
        },
        { 
            name: 'OriginalPrice', 
            title: 'Original Price', 
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
            title: 'Dimensions', 
            type: 'string', 
        },
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
        {
            name: 'styleAndPattern',
            title: 'Style and Pattern',
            type: 'string',
        },
        {
            name: 'color',
            title: 'Color',
            type: 'array', 
            of: [{ type: 'string' }],
        },
    ],
};