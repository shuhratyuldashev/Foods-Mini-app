export interface Category {
  id: string;
  name: string;
  image?: string;
}

export interface Product {
  id: string;
  image?: string | null;
  name: string;
  description: string;
  price: number;
  category: Category;
  quantity: number; // для заказанных товаров
}

export interface Employer {
  id: string;
  username: string;
  fullname: string;
  phone_number: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image?: string | null;
  count: number;
  active?: boolean;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  image: string | null;
  quantity: number;
}

export interface Order {
  id: string;
  customer: string;
  total_price: number;
  status: "pending" | "preparing" | "delivered" | "cancelled"; // можешь дополнить
  delivery_status: "by_currier" | "self_get";
  order_date?: string;
  customer_latitude?: number;
  customer_longitude?: number;
  order_items: OrderItem[];
}
