const products  = [
    {
        id: 'redshoe',
        description: 'red shoe',
        price: 42.12
    },
    {
        id: 'bluejean',
        description: 'Blue Jeans',
        price: 55.55
    }
]

function getAllProducts()
{
    return products;
}

module.exports = { getAllProducts };