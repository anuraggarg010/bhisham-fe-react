// import axios from 'axios';

// // Create axios instance with base URL
// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Add a request interceptor to include auth token
// api.interceptors.request.use((config) => {
//   const user = JSON.parse(localStorage.getItem('user') || '{}');
//   if (user.token) {
//     config.headers.Authorization = `Bearer ${user.token}`;
//   }
//   return config;
// });

// // Dashboard
// export const getDashboardCounts = async () => {
//   // For demo purposes, return mock data
//   // In a real app: return api.get('/dashboard/counts');
//   return Promise.resolve({
//     data: {
//       bhisham: 24,
//       cc: 36,
//       kits: 89,
//       mc: 12
//     }
//   });
// };

// // User management
// export const createUser = async (userData) => {
//   // For demo: return api.post('/users', userData);
//   try {
//     console.log('Inside api post create User request', userData)
//     const response = await api.post(`/user/create-user`, userData);
//     return response.data; 
//   } catch (error) {
//     console.error('Error creating user:', error);
//     throw error; 
//   }
//   // return Promise.resolve({ data: { ...userData, id: Date.now() } });
// };

// // Bhisham management
// export const getAllBhisham = async () => {
//   // For demo purposes, return mock data
//   // In a real app: return api.get('/bhisham');
//   return Promise.resolve({
//     data: [
//       {
//         id: 1,
//         name: 'Bhisham Alpha',
//         created_by: 'Admin User',
//         status: 'complete',
//         serial_no: 'BH001',
//         complete_time: '2023-12-10 14:32:45'
//       },
//       {
//         id: 2,
//         name: 'Bhisham Beta',
//         created_by: 'Admin User',
//         status: 'incomplete',
//         serial_no: 'BH002',
//         complete_time: null
//       },
//       {
//         id: 3,
//         name: 'Bhisham Gamma',
//         created_by: 'Test User',
//         status: 'complete',
//         serial_no: 'BH003',
//         complete_time: '2024-01-15 09:22:33'
//       },
//       {
//         id: 4,
//         name: 'Bhisham Delta',
//         created_by: 'Admin User',
//         status: 'incomplete',
//         serial_no: 'BH004',
//         complete_time: null
//       }
//     ]
//   });
// };

// export const createBhisham = async (bhishamData) => {
//   // For demo: return api.post('/bhisham', bhishamData);
//   return Promise.resolve({ 
//     data: {
//       ...bhishamData,
//       id: Date.now(),
//       created_by: 'Admin User',
//       status: 'incomplete',
//       complete_time: null
//     }
//   });
// };

// export const completeBhisham = async (bhishamId) => {
//   // For demo: return api.put(/bhisham/${bhishamId}/complete);
//   return Promise.resolve({ 
//     data: {
//       id: bhishamId,
//       status: 'complete',
//       complete_time: new Date().toISOString().replace('T', ' ').substr(0, 19)
//     }
//   });
// };

// // MotherBox and Cubes management
// export const getCubesByMotherBox = async (bhishamId, motherBoxId) => {
//   // For demo: return api.get(/bhisham/${bhishamId}/motherbox/${motherBoxId}/cubes);
//   return Promise.resolve({
//     data: [
//       { id: 1, name: 'Cube A' },
//       { id: 2, name: 'Cube B' },
//       { id: 3, name: 'Cube C' },
//     ]
//   });
// };

// export const getKitsByCube = async (bhishamId, motherBoxId, cubeId) => {
//   // For demo: return api.get(/bhisham/${bhishamId}/motherbox/${motherBoxId}/cube/${cubeId}/kits);
//   return Promise.resolve({
//     data: [
//       { id: 1, name: 'Kit 1' },
//       { id: 2, name: 'Kit 2' },
//       { id: 3, name: 'Kit 3' },
//     ]
//   });
// };

// export const getItemsByKit = async (bhishamId, motherBoxId, cubeId, kitId) => {
//   // For demo: return api.get(/bhisham/${bhishamId}/motherbox/${motherBoxId}/cube/${cubeId}/kit/${kitId}/items);
//   return Promise.resolve({
//     data: [
//       { id: 1, name: 'Item X' },
//       { id: 2, name: 'Item Y' },
//       { id: 3, name: 'Item Z' },
//     ]
//   });
// };

// export default api;



import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include auth token
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  console.log('inside user', user)
  if (user.token) {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTA1MDEzOTksInVzZXJfaWQiOiJjaHNoYXJtYSJ9.p_q1vjpbSrnAY5YrPKa1G1FcTLYpJatEEF1J669ThUc`;
  }
  return config;
});


// Dashboard
export const getDashboardCounts = async () => {
  // For demo purposes, return mock data
  // In a real app: return api.get('/dashboard/counts');
  console.log('inside this')
  try{
    console.log('Inside api post create User request')
    const response = await api.get('/dashboard/get-stats');
    console.log('user-response', response?.data?.data)
    return response?.data?.data
  } catch(err) {
    console.error('Error creating user:', err);
    throw err;
  }
  // return Promise.resolve({
  //   data: {
  //     bhisham: 24,
  //     cc: 36,
  //     kits: 89,
  //     mc: 12
  //   }
  // });
};

// User management
export const createUser = async (userData) => {
  // For demo: return api.post('/users', userData);
  // return Promise.resolve({ data: { ...userData, id: Date.now() } });
    try {
    console.log('Inside api post create User request', userData)
    const response = await api.post(`/user/create-user`, JSON.stringify(userData));
    return response.data; 
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; 
  }
};

// Bhisham management
export const getAllBhisham = async () => {
  // For demo purposes, return mock data
  // In a real app: return api.get('/bhisham');
  try{
    console.log('inside bhishams')
    const response = await api.get('/dashboard/get-bhisham');
    console.log('bhisham-response', response?.data)
    return response?.data?.data
  } catch(error) {
    console.log('error', error)
  }
  // return Promise.resolve({
  //   data: [
  //     {
  //       id: 1,
  //       name: 'Bhisham Alpha',
  //       created_by: 'Admin User',
  //       status: 'complete',
  //       serial_no: 'BH001',
  //       complete_time: '2023-12-10 14:32:45'
  //     },
  //     {
  //       id: 2,
  //       name: 'Bhisham Beta',
  //       created_by: 'Admin User',
  //       status: 'incomplete',
  //       serial_no: 'BH002',
  //       complete_time: null
  //     },
  //     {
  //       id: 3,
  //       name: 'Bhisham Gamma',
  //       created_by: 'Test User',
  //       status: 'complete',
  //       serial_no: 'BH003',
  //       complete_time: '2024-01-15 09:22:33'
  //     },
  //     {
  //       id: 4,
  //       name: 'Bhisham Delta',
  //       created_by: 'Admin User',
  //       status: 'incomplete',
  //       serial_no: 'BH004',
  //       complete_time: null
  //     }
  //   ]
  // });
};

export const createBhisham = async (bhishamData) => {
  // For demo: return api.post('/bhisham', bhishamData);
  try {
    console.log('bhisham data', bhishamData)
    const data = await api.post('/bhisham/create', JSON.stringify(bhishamData));
    console.log('created successfully')
  } catch(error) {

  }
  return Promise.resolve({ 
    data: {
      ...bhishamData,
      id: Date.now(),
      created_by: 'Admin User',
      status: 'incomplete',
      complete_time: null
    }
  });
};

export const completeBhisham = async (bhishamId) => {
  // For demo: return api.put(/bhisham/${bhishamId}/complete);
  return Promise.resolve({ 
    data: {
      id: bhishamId,
      status: 'complete',
      complete_time: new Date().toISOString().replace('T', ' ').substr(0, 19)
    }
  });
};

// MotherBox and Cubes management
export const getCubesByMotherBox = async (bhishamId, motherBoxId) => {
  // For demo: return api.get(/bhisham/${bhishamId}/motherbox/${motherBoxId}/cubes);
  try {
    const response = await api.get(`/dashboard/get-cubes?bhishamid=${bhishamId}&mcno=${motherBoxId}`)
    console.log('cubes response', response.data)
    return response?.data
  } catch(err) {
    console.log('error', err)
  }
};

export const getKitsByCube = async (bhishamId, motherBoxId, cubeId) => {
  // For demo: return api.get(/bhisham/${bhishamId}/motherbox/${motherBoxId}/cube/${cubeId}/kits);
  try {
    const response = await api.get(`/dashboard/get-kits?bhishamid=${bhishamId}&mcno=${motherBoxId}&ccno=${cubeId}`)
    console.log('kit response', response?.data)
    return response?.data
  } catch(err) {
    console.log('error', err)
  }
  return Promise.resolve({
    data: [
      { id: 1, name: 'Kit 1' },
      { id: 2, name: 'Kit 2' },
      { id: 3, name: 'Kit 3' },
    ]
  });
};

export const getItemsByKit = async (bhishamId, motherBoxId, cubeId, kitName, complete) => {
  // For demo: return api.get(dashboard/get-mapping-items?bhishamid=1&mcno=1&ccno=1&kitname=PAIN RELIEF KIT);
  try {

    const response = complete === 1 ? await api.get(`dashboard/get-mapping-items?bhishamid=${bhishamId}&mcno=${motherBoxId}&ccno=${cubeId}&kitname=${kitName}`) : 
    await api.get(`dashboard/get-items?bhishamid=${bhishamId}&mcno=${motherBoxId}&ccno=${cubeId}&kitname=${kitName}`)
    console.log('item response', response?.data)
    return response?.data
  } catch(err) {
      console.log('error', err)
  }
  return Promise.resolve({
    data: [
      { 
        id: 1, 
        name: 'Item X',
        kitName: 'Kit 1',
        status: 'active',
        expiration: '2025-12-31',
        description: 'Primary component for system operation'
      },
      { 
        id: 2, 
        name: 'Item Y',
        kitName: 'Kit 1',
        status: 'active',
        expiration: '2025-10-15',
        description: 'Secondary support component'
      },
      { 
        id: 3, 
        name: 'Item Z',
        kitName: 'Kit 1',
        status: 'inactive',
        expiration: '2025-06-20',
        description: 'Backup component for emergency use'
      },
    ]
  });
};

export const getItemDetails = async (itemId) => {
  // For demo: return api.get(/items/${itemId});
  const items = [
    { 
      id: 1, 
      name: 'Item X',
      kitName: 'Kit 1',
      status: 'active',
      expiration: '2025-12-31',
      description: 'Primary component for system operation',
      serialNumber: 'IX-001',
      manufacturer: 'Tech Industries',
      lastUpdated: '2024-02-15'
    },
    { 
      id: 2, 
      name: 'Item Y',
      kitName: 'Kit 1',
      status: 'active',
      expiration: '2025-10-15',
      description: 'Secondary support component',
      serialNumber: 'IY-002',
      manufacturer: 'Tech Industries',
      lastUpdated: '2024-01-20'
    },
    { 
      id: 3, 
      name: 'Item Z',
      kitName: 'Kit 1',
      status: 'inactive',
      expiration: '2025-06-20',
      description: 'Backup component for emergency use',
      serialNumber: 'IZ-003',
      manufacturer: 'Backup Systems Inc',
      lastUpdated: '2023-11-30'
    },
  ];
  
  const item = items.find(i => i.id === itemId) || null;
  return Promise.resolve({ data: item });
};

export const updateItem = async (itemId, actionId) => {
  // For demo: return api.put(/items/${itemId}/update, { actionId });
  return Promise.resolve({
    data: {
      id: itemId,
      actionId,
      status: 'active',
      lastUpdated: new Date().toISOString().replace('T', ' ').substr(0, 19)
    }
  });
};

export const getAllUser = async(user) => {
  console.log('user here', user)
  try {
    const userData = {
      name: user.name,
      login_id: user.login_id,
      password: user.password,
      role_id: user.role_id
  
    }
    const response = await api.get(`user/get-users`, JSON.stringify(userData));
    console.log(response)
    return response?.data?.data
  } catch(err) {
    console.log('error', err)
  }
}

export const updatePasswordPageApi = async(loginId, newPassword) => {
  console.log('user here', loginId, newPassword)
  try {
    const userData = {
      login_id: loginId,
      password: newPassword,
    }
    const response = await api.post(`user/update-password`, JSON.stringify(userData));
    console.log(response)
    return response?.data?.data
  } catch(err) {
    console.log('error', err)
  }
}

export default api;