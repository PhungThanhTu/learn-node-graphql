const productsModel = require('./products.model')
module.exports = {
    Query: {
        products: () => {
            return productsModel.getAllProducts();
        },
        productsByPrice: (_, args) => {
            let min = args.min;
            let max = args.max;

            return productsModel.getProductsByPrice(min,max);
        }
    }
};