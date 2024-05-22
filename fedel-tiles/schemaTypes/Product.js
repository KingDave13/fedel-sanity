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
            name: 'subcategory',
            title: 'Subcategory',
            type: 'reference',
            to: { type: 'subcategory' },
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: { type: 'category' },
        },
        {
            name: 'attributes',
            title: 'Attributes',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'attribute' } }],
        },
    ],
    preprocess: async (doc) => {
        // Update the subcategories field in category documents
        if (doc.subcategory) {
            // Fetch the referenced subcategory document
            const subcategory = await client.getDocument(doc.subcategory._ref);
            if (subcategory) {
                // Update the subcategories field in category documents
                const categoryQuery = `*[_type == "category" && references($subcategoryId)]`;
                const categoriesToUpdate = await client.fetch(categoryQuery, { subcategoryId: subcategory._id });

                // Update each category document
                categoriesToUpdate.forEach(async (category) => {
                    const updatedCategory = {
                        _id: category._id,
                        _type: category._type,
                        subcategories: [{ _type: 'reference', _ref: subcategory._id }],
                    };
                    await client.createOrReplace(updatedCategory);
                });
            }
        }
    },
};