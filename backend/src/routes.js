import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import OpenDeliveryController from './app/controllers/OpenDeliveriesController';
import DeliveredController from './app/controllers/DeliveredController';

// Middlewares
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

// Retirada
routes.get('/deliverymans/:deliverymanId', OpenDeliveryController.index);

// Entregues
routes.get(
  '/deliverymans/:deliverymanId/deliveries',
  DeliveredController.index
);

// Middleware de autenticação
routes.use(authMiddleware);

// Destinatarios
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

// Entregadores
routes.get('/deliverymans', DeliverymanController.index);
routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:id', DeliverymanController.update);
routes.delete('/deliverymans/:id', DeliverymanController.delete);

// Entregas
routes.get('/deliveries', DeliveryController.index);
routes.post('/deliveries', DeliveryController.store);
routes.put('/deliveries/:id', DeliveryController.update);
routes.delete('/deliveries/:id', DeliveryController.delete);

// Upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
