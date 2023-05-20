import express from "express";
import multer from "multer";
import { UploadFileController } from "../controllers/UploadFileController";
import { PokemonInformationsServiceImpl } from "../services/impl/PokemonServiceImpl";
import { UploadFileServiceImpl } from "../services/impl/UploadFileServiceImpl";

const upload = multer({ dest: "uploads/" });

export const uploadFileRoutes = express.Router();

const pokemonInformationsService = new PokemonInformationsServiceImpl();
const uploadService = new UploadFileServiceImpl(pokemonInformationsService);
const uploadFileController = new UploadFileController(uploadService);

uploadFileRoutes.post("/", upload.single("file"), uploadFileController.upload.bind(uploadFileController));
