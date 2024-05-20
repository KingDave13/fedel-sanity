export default {
    name: 'product',
    title: 'Product',
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
            name: 'description', 
            title: 'Description', 
            type: 'text' 
        },
        { 
            name: 'images', 
            title: 'Images', 
            type: 'array', of: [{ type: 'image' }]
        },
        { 
            name: 'category', 
            title: 'Category', 
            type: 'reference', to: { type: 'category' } 
        },
    ],
  };