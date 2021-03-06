/* eslint-disable camelcase */
import { api } from "./server";

export const getLogin = async (email: string, password: string) => {
  try {
    const { data } = await api.post("login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const { data } = await api.post("forgot", { email });
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const resetPassword = async (
  email: string,
  token: string,
  password: string,
  password_confirmation: string
) => {
  try {
    const { data } = await api.post("reset", {
      email,
      password,
      password_confirmation,
      token,
    });
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const disableUser = async (ativo: number, id: number) => {
  try {
    const { data } = await api.post(`user/status/${id}`, {
      ativo,
    });
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};
