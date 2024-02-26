const mongoose = require("mongoose");
const User = require("../models/user");
const Blog = require("../models/blog");
const Comment = require("../models/comment");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

//UTITLIY FUNCTIONS

const checkId = (id) => {
	if (!mongoose.isValidObjectId(id)) throw new BadRequestError("Invalid ID");
	return id;
};
const getUserId = async (req) => {
	return checkId(req.user.userId);
};

//UTILITY FUNCTIONS END

const getTextSuggestion = async (req, res) => {
	const text = req.body.text;
	const userId = getUserId(req);

	res.status(StatusCodes.OK).json({
		data: { text: text },
		success: true,
		// msg: "Data Fetched Successfully",
		msg: "This route is not implemented yet.",
	});
};
const getParaSuggestion = async (req, res) => {
	const para = req.body.paragraph;
	const userId = getUserId(req);

	res.status(StatusCodes.OK).json({
		data: { paragraph: para },
		success: true,
		// msg: "Data Fetched Successfully",
		msg: "This route is not implemented yet.",
	});
};
const getImageSuggestionPrompt = async (req, res) => {
	const prompt = req.body.prompt;
	const userId = getUserId(req);

	res.status(StatusCodes.OK).json({
		data: { prompt: prompt },
		success: true,
		// msg: "Data Fetched Successfully",
		msg: "This route is not implemented yet.",
	});
};
const getCoverImageSuggestion = async (req, res) => {
	const titlePrompt = req.body.titlePrompt;
	const userId = getUserId(req);

	res.status(StatusCodes.OK).json({
		data: { titlePrompt: titlePrompt },
		success: true,
		// msg: "Data Fetched Successfully",
		msg: "This route is not implemented yet.",
	});
};

module.exports = {
	getTextSuggestion,
	getParaSuggestion,
	getImageSuggestionPrompt,
	getCoverImageSuggestion,
};
