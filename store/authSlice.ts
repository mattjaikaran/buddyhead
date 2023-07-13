// import axios from "axios";
// import Cookies from "js-cookie";
// import { useAppSelector } from "../hooks/redux";
// export interface UserProps {
//   id: string;
//   first_name: string;
//   last_name: string;
//   email: string;
//   phone_number: string;
//   token?: string;
// }
// interface LoginFormInputs {
//   email: string;
//   password: string;
// }
// export interface SignupFormInputs {
//   first_name: string;
//   last_name: string;
//   email: string;
//   password: string;
//   password_confirmation?: string;
//   name: string;
// }
// interface PasswordResetInputs {
//   newPassword: string;
//   newPassword2: string;
//   uid: string;
//   token: string;
// }

// interface SignupResponseData {
//   first_name: string;
//   last_name: string;
//   email: string;
//   is_developer: boolean;
//   is_vendor: boolean;
//   is_integrator: boolean;
//   phone_number?: string;
// }

// export const tokenHeaders = () => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const { user }: any = useAppSelector((state) => state.auth);
//   const headers = {
//     "Content-Type": "application/json",
//     "X-CSRFToken": Cookies.get("csrftoken"),
//     sessionid: Cookies.get("sessionid"),
//     Authorization: `Token ${user?.data?.token}`,
//   };
//   return headers;
// };

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export async function useSignup(data: SignupFormInputs) {
//   try {
//     const response = await axios.post(`${API_URL}/users/`, data);
//     console.log("response", response);
//     return response.data;
//   } catch (error) {
//     console.log("error in useSignup", error);
//   }
// }
// export async function useLogin(data: LoginFormInputs): Promise<any> {
//   try {
//     const response = await axios.post(`${API_URL}/login/`, data);
//     console.log("response", response);
//     return response.data;
//   } catch (error) {
//     console.log("error in useLogin", error);
//   }
// }

// export async function useLogout(user: UserProps): Promise<any> {
//   try {
//     const response = await axios.post(`${API_URL}/logout/`, user.email);
//     console.log("response", response);
//     localStorage.clear();
//     return response;
//   } catch (error) {
//     console.log("error in useLogout", error);
//   }
// }

// export async function useForgotPassword(email: string) {
//   try {
//     const data = { email: email.toLowerCase() };
//     const response = await axios.post(`${API_URL}/password/reset/`, data);
//     console.log("response", response);
//     return response.data;
//   } catch (error) {
//     console.log("error in useForgotPassword", error);
//   }
// }

// export async function usePasswordReset(data: PasswordResetInputs) {
//   try {
//     const response = await axios.post(
//       `${API_URL}/password/reset/confirm/`,
//       data
//     );
//     console.log("response", response);
//     return response.data;
//   } catch (error) {
//     console.log("error in useForgotPassword", error);
//   }
// }
