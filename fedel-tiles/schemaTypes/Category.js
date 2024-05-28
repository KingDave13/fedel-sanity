export default {
    name: 'category',
    title: 'Category',
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
            name: 'herotext', 
            title: 'Hero Text', 
            type: 'text' 
        },
        { 
            name: 'description', 
            title: 'Description', 
            type: 'text' 
        },
        { 
            name: 'image', 
            title: 'Image', 
            type: 'image' 
        },
    ],
};