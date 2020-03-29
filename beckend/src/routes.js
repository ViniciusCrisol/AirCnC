const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const dashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");
const ApprovalController = require("./controllers/ApprovalController");
const RejectionController = require("./controllers/RejectionController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);

routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.get("/spots", SpotController.index);

routes.get("/dashboard", dashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);

routes.post("/bookings/:dooking_id/approval");

routes.post("/bookings/:booking_id/approvals", ApprovalController.store);
routes.post("/bookings/:booking_id/rejections", RejectionController.store);

module.exports = routes;
