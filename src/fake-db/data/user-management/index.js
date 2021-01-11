import mock from '@/fake-db/mock.js'

const data = {
  users: [
    {
      'id': 268,
      'nik' : '0102035',
      'username': 'adoptionism744',
      'avatar': require('@/assets/images/portrait/small/avatar-s-3.jpg'),
      'email': 'angelo@sashington.com',
      'name': 'Angelo Sashington',
      'dob': '28 January 1998',
      'gender': 'male',
      'country': 'Bolivia',
      'role': 'admin',
      'status': 'active',
      'is_verified': true,
      'department': 'sales',
      'company': 'WinDon Technologies Pvt Ltd',
      'mobile': '+65958951757',
      'website': 'https://rowboat.com/insititious/Angelo',
      'languages_known': ['English', 'Arabic'],
      'contact_options': ['email', 'message', 'phone'],
      'location': {
        'add_line_1': 'A-65, Belvedere Streets',
        'add_line_2': '',
        'post_code': '1868',
        'city': 'New York',
        'state': 'New York',
        'country': 'United States'
      },
      'social_links': {
        'twitter': 'https://twitter.com/adoptionism744',
        'facebook': 'https://www.facebook.com/adoptionism664',
        'instagram': 'https://www.instagram.com/adopt-ionism744/',
        'github': 'https://github.com/madop818',
        'codepen': 'https://codepen.io/adoptism243',
        'slack': '@adoptionism744'
      },
      'permissions': {
        'users': {
          'read': true,
          'write': false,
          'create': false,
          'delete': false
        },
        'posts': {
          'read': true,
          'write': true,
          'create': true,
          'delete': true
        },
        'comments': {
          'read': true,
          'write': false,
          'create': true,
          'delete': false
        }

      }
    },
    {
      'id': 269,
      'nik' : '0102035',
      'username': 'MHFC0102035',
      'avatar': require('@/assets/images/portrait/small/avatar-s-2.jpg'),
      'email': 'rubi@ortwein.com',
      'name': 'Rubi Ortwein',
      'country': 'Syria',
      'role': 'user',
      'status': 'blocked',
      'is_verified': false,
      'department': 'development',
      'points' : 800,
      'level' : 9
    },
    {
      'id': 270,
      'nik' : '0102035',
      'username': 'MHFC0102035',
      'avatar': require('@/assets/images/portrait/small/avatar-s-3.jpg'),
      'email': 'donnette@charania.com',
      'name': 'Donnette Charania',
      'country': 'Iraq',
      'role': 'staff',
      'status': 'deactivated',
      'is_verified': true,
      'department': 'sales',
      'points' : 1200,
      'level' : 10
    },
    {
      'id': 271,
      'nik' : '0102035',
      'username': 'MHFC0102035',
      'avatar': require('@/assets/images/portrait/small/avatar-s-12.jpg'),
      'email': 'ardith@duffett.com',
      'name': 'Ardith Duffett',
      'country': 'Estonia',
      'role': 'user',
      'status': 'active',
      'is_verified': false,
      'department': 'sales',
      'points' : 1220,
      'level' : 10
    },
    {
      'id': 272,
      'nik' : '0102035',
      'username': 'MHFC0102035',
      'avatar': require('@/assets/images/portrait/small/avatar-s-16.jpg'),
      'email': 'antone@berman.com',
      'name': 'Antone Berman',
      'country': 'India',
      'role': 'user',
      'status': 'blocked',
      'is_verified': true,
      'department': 'sales',
      'points' : 1230,
      'level' : 10
    },
    {
      'id': 273,
      'nik' : '0102035',
      'username': 'MHFC0102035',
      'avatar': require('@/assets/images/portrait/small/avatar-s-18.jpg'),
      'email': 'maryann@gour.com',
      'name': 'Maryann Gour',
      'country': 'Solomon Islands',
      'role': 'user',
      'status': 'active',
      'is_verified': true,
      'department': 'sales',
      'points' : 1260,
      'level' : 10
    },
    {
      'id': 274,
      'nik' : '0102035',
      'username': 'MHFC0102035',
      'avatar': require('@/assets/images/portrait/small/avatar-s-7.jpg'),
      'email': 'holli@vanduyne.com',
      'name': 'Holli Vanduyne',
      'country': 'Lebanon',
      'role': 'staff',
      'status': 'active',
      'is_verified': true,
      'department': 'sales',
      'points' : 1404,
      'level' : 10
    },
    {
      'id': 275,
      'nik' : '0102035',
      'username': 'MHFC0102035',
      'avatar': require('@/assets/images/portrait/small/avatar-s-26.jpg'),
      'email': 'juanita@sartoris.com',
      'name': 'Juanita Sartoris',
      'country': 'Papua New Guinea',
      'role': 'staff',
      'status': 'active',
      'is_verified': true,
      'department': 'management',
      'points' : 1500,
      'level' : 11
    }
  ]
}

mock.onGet('/web/get_user').reply(() => {
  return [200, JSON.parse(JSON.stringify(data)).reverse()]
})

// GET: Fetch Single User Details
mock.onGet('/web/get_user').reply((request) => {

  const userId = request.url.substring(request.url.lastIndexOf('/') + 1)

  const user = data.users.find((user) => user.id == userId)

  return user ? [200, JSON.parse(JSON.stringify(user))] : [404]
})

// // POST : Add new Item
// mock.onPost("/api/data-list/products/").reply((request) => {

//   // Get event from post data
//   let item = JSON.parse(request.data).item

//   const length = data.products.length
//   let lastIndex = 0
//   if(length){
//     lastIndex = data.products[length - 1].id
//   }
//   item.id = lastIndex + 1

//   data.products.push(item)

//   return [201, {id: item.id}]
// })

// // Update Product
// mock.onPost(/\/api\/data-list\/products\/\d+/).reply((request) => {

//   const itemId = request.url.substring(request.url.lastIndexOf("/")+1)

//   let item = data.products.find((item) => item.id == itemId)
//   Object.assign(item, JSON.parse(request.data).item)

//   return [200, item]
// })

// // DELETE: Remove Item
mock.onDelete(/\/api\/user-management\/users\/\d+/).reply((request) => {

  const userId = request.url.substring(request.url.lastIndexOf('/') + 1)

  const itemIndex = data.users.findIndex((p) => p.id == userId)
  data.users.splice(itemIndex, 1)
  return [200]
})
