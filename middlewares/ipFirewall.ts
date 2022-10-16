import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { allowedIps } from "../config/security";

const ipFirewall = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	if (allowedIps.includes(request.ip)) return next();

	return response.send(
		createHttpError(
			401,
			`This resource cannot be access from this IP [${request.ip}]`
		)
	);
};

export { ipFirewall };
