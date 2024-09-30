import { API_HOST_URL } from "@/constants";
import axios from "axios";
export async function getProducts(q?: string) {
  const { data } = await axios.get(`${API_HOST_URL}/products/`);
  return data;
}
export async function getCategories() {
  const { data } = await axios.get(`${API_HOST_URL}/products/categories`);
  return data;
}
export async function getProductDetails(id: string | number) {
  const { data } = await axios.get(`${API_HOST_URL}/products/${id}`);
  return data;
}
