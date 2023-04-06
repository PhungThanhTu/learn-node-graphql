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
        },
        product: (_, args) => {
            return productsModel.getProductById(args.id);
        }
    },
    Mutation: {
        addNewProduct: (_, args) => {
            return productsModel.addNewProduct(args.id, args.description, args.price);
        },
        addNewProductReview: (_, args) => {
            return productsModel.addNewProductReview(args.id, args.rating, args.comment);
        }
    }
};