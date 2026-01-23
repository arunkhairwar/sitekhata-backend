export interface ApiResponse<T = any> {
  success: boolean;
  // status: string;
  message: string;
  data?: T;
  meta?: any;
  stack?: string;
}

export const successResponse = <T>(
  data: T,
  message: string = "Success",
  meta: any = null,
): ApiResponse<T> => {
  return {
    success: true,
    // status: "success",
    message,
    data,
    meta: meta || undefined,
  };
};

export const errorResponse = (
  message: string = "Error",
  data: any = null,
  stack: string | undefined = undefined,
): ApiResponse<any> => {
  return {
    success: false,
    // status: "error",
    message,
    data: data || undefined,
    stack,
  };
};
