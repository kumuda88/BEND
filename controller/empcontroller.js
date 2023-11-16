import express from "express";
import { createEmp,getEmps,getEmp,delEmp,upEmp } from "../service/service.js";

const router=express.Router()
router.route("/").post(createEmp)
router.route("/:id").get(getEmp)
router.route("/").get(getEmps)
router.route("/:id").delete(delEmp)
router.route("/:id").put(upEmp)
router.route("/:id").patch(upEmp)

export { router }