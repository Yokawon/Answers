import Mock from 'mockjs'

Mock.mock('/api/goodslist', {
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Product 1",
      "description": "Description for Product 1",
      "price": 99.99,
      "category": {
        "id": 1,
        "name": "Electronics"

      },
      "images": ["image1.jpg", "image2.jpg"],
      "reviews": [
        {
          "id": 1,
          "rating": 5,
          "comment": "Great product!",
          "author": "John Doe"

        },
        {
          "id": 2,
          "rating": 4,
          "comment": "Great product!",
          "author": "John Doe"

        }, {
          "id": 3,
          "rating": 3,
          "comment": "Great product!",
          "author": "John Doe"

        }, {
          "id": 4,
          "rating": 2.5,
          "comment": "Great product!",
          "author": "John Doe"

        }, {
          "id": 5,
          "rating": 2,
          "comment": "Great product!",
          "author": "John Doe"

        }, {
          "id": 6,
          "rating": 4.5,
          "comment": "Great product!",
          "author": "John Doe"

        }
      ]
    },//商品1
    {
      "id": 2,
      "name": "Product 2",
      "description": "Description for Product 1",
      "price": 50.00,
      "category": {
        "id": 2,
        "name": "Electronics"

      },
      "images": ["image1.jpg", "image2.jpg"],
      "reviews": [
        {
          "id": 1,
          "rating": 5,
          "comment": "Great product!",
          "author": "John Doe"

        },
        {
          "id": 2,
          "rating": 4,
          "comment": "Great product!",
          "author": "John Doe"

        }, {
          "id": 3,
          "rating": 4.5,
          "comment": "Great product!",
          "author": "John Doe"

        }, {
          "id": 4,
          "rating": 1,
          "comment": "Great product!",
          "author": "John Doe"

        }, {
          "id": 5,
          "rating": 2,
          "comment": "Great product!",
          "author": "John Doe"

        }, {
          "id": 6,
          "rating": 5,
          "comment": "Great product!",
          "author": "John Doe"

        }
      ]
    },//商品2
    {
      "id": 3,
      "name": "Product 3",
      "description": "Description for Product 1",
      "price": 100,
      "category": {
        "id": 3,
        "name": "Electronics"

      },
      "images": ["image1.jpg", "image2.jpg"],
      "reviews": [
        {
          "id": 1,
          "rating": 4,
          "comment": "Great product!",
          "author": "John Doe"

        },
        {
          "id": 2,
          "rating": 3.5,
          "comment": "Great product!",
          "author": "John Doe"

        }, {
          "id": 3,
          "rating": 3.5,
          "comment": "Great product!",
          "author": "John Doe"

        }, {
          "id": 4,
          "rating": 4.5,
          "comment": "Great product!",
          "author": "John Doe"

        }, {
          "id": 5,
          "rating": 5,
          "comment": "Great product!",
          "author": "John Doe"

        }, {
          "id": 6,
          "rating": 3,
          "comment": "Great product!",
          "author": "John Doe"

        }
      ]
    }//商品3
  ]
})