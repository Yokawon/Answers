import Mock from 'mockjs'
Mock.mock("/api/users", {
  "status": "success",
  "data": [
    {
      "_id": "61f7c9e68d2fa1b8d4a2a9f0",
      "username": "john.A",
      "email": "john.A@example.com",
      "registrationDate": "2022-01-01T00:00:00Z",
      "status": { "code": 0, "description": "InActive" },
    },
    {
      "_id": "4e2fa3b68d5fe1c8d3b1a8e1",
      "username": "john.B",
      "email": "john.B@example.com",
      "registrationDate": "2022-01-02T00:00:00Z",
      "status": { "code": 1, "description": "Active" },
    },
    {
      "_id": "5f1bc8d79e4fa2b8c4d3a9e2",
      "username": "john.C",
      "email": "john.C@example.com",
      "registrationDate": "2022-01-03T00:00:00Z",
      "status": { "code": 0, "description": "InActive" },
    },
    {
      "_id": "6e3cb4a78f6ed3c9e5b2baf3",
      "username": "john.D",
      "email": "john.D@example.com",
      "registrationDate": "2022-01-04T00:00:00Z",
      "status": { "code": 1, "description": "Active" },
    },
    {
      "_id": "7d2ac9b68e5fd2b8f4c1c9d4",
      "username": "john.E",
      "email": "john.E@example.com",
      "registrationDate": "2022-02-01T00:00:00Z",
      "status": { "code": 0, "description": "InActive" },
    },
    {
      "_id": "8c1bd8a79d4ec1a9d5e3d8c5",
      "username": "john.F",
      "email": "john.F@example.com",
      "registrationDate": "2022-03-01T00:00:00Z",
      "status": { "code": 0, "description": "InActive" },
    },
    {
      "_id": "9e3fa2c68c3fb3a8e6d4e7b6",
      "username": "john.G",
      "email": "john.G@example.com",
      "registrationDate": "2022-04-01T00:00:00Z",
      "status": { "code": 1, "description": "Active" },
    },
    // 更多用户...
  ]
}
)