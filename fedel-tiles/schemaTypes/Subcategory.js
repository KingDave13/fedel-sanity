export default {
    name: 'subcategory',
    title: 'Subcategory',
    type: 'document',
    fields: [
        { 
            name: 'name', 
            title: 'Name', 
            type: 'string' 
        },
        { 
            name: 'slug', 
            title: 'Slug', 
            type: 'slug', 
            options: { source: 'name', maxLength: 96 } 
        },
        { 
            name: 'attributes', 
            title: 'Attributes', 
            type: 'array', 
            of: [{ type: 'reference', to: { type: 'attribute' } }] 
        },
    ],
};