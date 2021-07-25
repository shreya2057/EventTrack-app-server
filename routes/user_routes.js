import { Router } from "express";
import { authTokenCheck, checkUser } from "../middlewares/auth_middleware.js";
import user_controller from "../controller/user_controller.js";
import image from "../functions/image.js";

const router = Router();

router.get("/", checkUser, user_controller.getCurrentUser);
router.get("/myEvents", checkUser, user_controller.getMyEvents);
router.get("/myfavourites", checkUser, user_controller.getMyFavourites);

router.post(
	"/uploadProfile",
	checkUser,
	image.upload("profile"),
	user_controller.uploadProfile
);

export default router;
