import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { passphrase } from "../config/security";

const passwordValidation = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const { auth } = request.body;

	if (auth === passphrase) return next();

	return response.send(createHttpError(401, `Wrong 'upload passphrase'`));
};

export { passwordValidation };
