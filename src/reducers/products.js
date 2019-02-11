var initialState = [
    {
        id     : 1,
        name   : 'Iphone 7 plus',
        image  : 'http://xahoithongtin.com.vn/dataimages/201704/original/images1915797_2.JPG',
        description : 'Sản phẩm do apple sản phẩm',
        price  : 500,
        inventory : 10,
        rating    : 4
    },
    {
        id     : 2,
        name   : 'Samsung glaxy S7',
        image  : 'https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-hh-600x600-600x600.jpg',
        description : 'Sản phẩm do samsung sản phẩm',
        price  : 400,
        inventory : 15,
        rating    : 3
    },
    {
        id     : 3,
        name   : 'Oppo F1s',
        image  : 'https://cdn.fptshop.com.vn/Uploads/Originals/2017/8/29/636396217066191623_1.jpg',
        description : 'Sản phẩm do china sản phẩm',
        price  : 450,
        inventory : 10,
        rating    : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
          default : return [...state];
    }
}
export default products;