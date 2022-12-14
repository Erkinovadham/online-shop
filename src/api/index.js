import axios from "../utils/axios";
export function signUp(quary) {
  if (!quary) {
    throw "please";
  }
  let url = `auth/sign-up`;
  return axios.post(url, {
    name: `${quary.name}`,
    email: `${quary.email}`,
    password: `${quary.password}`,
    lastName: `${quary.lastName}`,
    phone: `${quary.phone}`,
    role: `user`,
  });
}

export function signIn(quary) {
  if (!quary) {
    throw "please";
  }
  let url = `auth/sign-in`;
  return axios.post(url, {
    email: `${quary.email}`,
    password: `${quary.password}`,
  });
}

export function products() {
  let url = `products/public`;
  return axios.get(url);
}
export function getCategories() {
  let url = `categories/`;
  return axios.get(url);
}

export function fetchProduct(id) {
  if (!id) {
    throw "please inser id parametr";
  }
  return axios.get(`products/`);
}

export function deleteProduct(id) {
  if (!id) {
    throw "please inser id parametr";
  }
  let url = `products/&{id}/delete`;
  return axios.delete(url);
}

export function createNewProduct(quary) {
  if (!quary) {
    throw "please inser id parametr";
  }
  let url = `products/`;
  return axios.post(url, {
    name: `${quary.name}`,
    price: `${quary.price}`,
    salePrice: `${quary.salePrice}`,
    quantity: `${quary.quantity}`,
    description: `${quary.description}`,
    categoryId: `${quary.categoryId}`,
  });
}

export function deleteCategory(id) {
  if (!id) {
    throw "please inser id parametr";
  }
  let url = `categories/${id}`;
  return axios.delete(url);
}

export function editCategory(id, text) {
  if (!id) {
    throw "please inser id parametr";
  }
  let url = `categories/${id}`;
  return axios.put(url, {
    name: `${text}`,
  });
}

export function addCategory(query) {
  if (!query) {
    throw "Please insert query parametr";
  }
  let url = `categories/`;
  return axios.post(url, {
    name: `${query.name}`,
  });
}
// 


export function getAccount() {
  let url = `auth/profile`;
  return axios.get(url);
}
// export function getCart() {
//   let url = `cart/`;
//   return axios.get(url);
// }

export function getUserCart() {
  let url = `cart/${localStorage.userId}`;
  return axios.get(url);
}

export function createCart() {
  let url = `cart/`;
  return axios.post(url);
}