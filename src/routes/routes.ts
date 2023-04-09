import { Router } from "express";
import { SheetController } from "../controllers/sheet.controller";

const sheetController: SheetController = new SheetController();
const router: Router = Router();


router.get('/', sheetController.home);
router.post('/sheet/read', sheetController.readSheet);

export { router };