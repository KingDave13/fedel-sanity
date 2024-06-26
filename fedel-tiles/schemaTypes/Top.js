export default {
    name: 'top',
    title: 'Top Products of the Week',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'products',
            title: 'Products',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'product' } }]
        }
    ]
};