import { Request, Response } from "express";
import { AuthService } from "./auth.services";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

// user signup/create
const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.createUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "User registered successfully",
    data: result,
  });
});

// user login
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { data, token } = await AuthService.loginUser(req.body);

  // res.setHeader("accessToken", token);
  sendResponse(res, {
    message: "User logged in successfully",
    data: { token, data },
  });
});

// change password
const changePassword = catchAsync(async (req, res) => {
  const result = await AuthService.changePassword(req.user, req.body);
  sendResponse(res, {
    message:
      "The password has been changed successfully. Please log in with the new password",
    data: result,
  });
});

export const AuthControllers = {
  createUser,
  loginUser,
  changePassword,
};
