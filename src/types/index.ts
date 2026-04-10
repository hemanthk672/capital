export interface AppointmentFormData {
  name: string;
  phone: string;
  service: string;
  appointment_date: string;
  appointment_time: string;
  message: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: string;
  image: string;
}
