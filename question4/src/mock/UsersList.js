import Mock from 'mockjs'

Mock.mock('/api/userslist', {
  "status": "success",
  "data": [
    {
      "groupId": 1,
      "groupName": "Admin Group",
      "users": [
        {
          "id": 1,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "admin",
          "createdAt": "2023-01-01T00:00:00Z"

        },
        {
          "id": 2,
          "name": "John A",
          "email": "john.doe@example.com",
          "role": "admin",
          "createdAt": "2023-01-02T00:00:00Z"

        },
        {
          "id": 3,
          "name": "John B",
          "email": "john.doe@example.com",
          "role": "admin",
          "createdAt": "2023-01-03T00:00:00Z"

        },
        {
          "id": 4,
          "name": "John C",
          "email": "john.doe@example.com",
          "role": "admin",
          "createdAt": "2023-01-04T00:00:00Z"

        },
        {
          "id": 5,
          "name": "John D",
          "email": "john.doe@example.com",
          "role": "admin",
          "createdAt": "2023-01-05T00:00:00Z"

        },
        // 更多用户...
      ]
    },
    {
      "groupId": 2,
      "groupName": "Editor-1 Group",
      "users": [
        {
          "id": 1,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-01T00:00:00Z"

        },
        {
          "id": 2,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-02T00:00:00Z"

        },
        {
          "id": 3,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-03T00:00:00Z"

        },
        {
          "id": 4,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-04T00:00:00Z"

        },
        {
          "id": 5,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-05T00:00:00Z"

        },
        // ...
      ]
    },
    {
      "groupId": 3,
      "groupName": "Editor-2 Group",
      "users": [
        {
          "id": 1,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-01T00:00:00Z"

        },
        {
          "id": 2,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-02T00:00:00Z"

        },
        {
          "id": 3,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-03T00:00:00Z"

        },
        {
          "id": 4,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-04T00:00:00Z"

        },
        {
          "id": 5,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-05T00:00:00Z"

        },
        // ...
      ]
    },
    {
      "groupId": 4,
      "groupName": "Editor-3 Group",
      "users": [
        {
          "id": 1,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-01T00:00:00Z"

        },
        {
          "id": 2,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-02T00:00:00Z"

        },
        {
          "id": 3,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-03T00:00:00Z"

        },
        {
          "id": 4,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-04T00:00:00Z"

        },
        {
          "id": 5,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "user",
          "createdAt": "2023-01-05T00:00:00Z"

        },
        // ...
      ]
    },
  ]
}
)