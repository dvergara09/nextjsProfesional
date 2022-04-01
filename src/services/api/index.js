const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    getProducts: `${API}/api/${VERSION}/products`,
    postProducts: `${API}/api/${VERSION}/products`,
    putProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    postsUsers: `${API}/api/${VERSION}/users`,
    avialable: `${API}/api/${VERSION}/users/is-avialable`,
  },
  categories: {
    getCategories: `${API}/api/${VERSION}/categories`,
    postCategory: `${API}/api/${VERSION}/categories`,
    putCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    postFile: `${API}/api/${VERSION}/files/upload`,
    getFile: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endpoints;
