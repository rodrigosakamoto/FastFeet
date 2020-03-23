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
import DeliveryStatusController from './app/controllers/DeliveryStatusController';
import DeliveryProblemsController from './app/controllers/DeliveryProblemController';

// Middlewares
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

// Retirada
routes.get('/deliverymans/:deliverymanId/status', OpenDeliveryController.index);
routes.put(
  '/deliveries/status/:deliverymanId/:deliveryId',
  DeliveryStatusController.update
);

// Entregues
routes.get(
  '/deliverymans/:deliverymanId/deliveries',
  DeliveredController.index
);
routes.put(
  '/deliveries/delivered/:deliverymanId/:deliveryId',
  upload.single('file'),
  DeliveredController.update
);

// Problemas
routes.get('/delivery/:deliveryId/problems', DeliveryProblemsController.index);
routes.post('/delivery/:deliveryId/problems', DeliveryProblemsController.store);
routes.delete(
  '/problem/:problemId/cancel-delivery',
  DeliveryProblemsController.delete
);

// Middleware de autenticação
routes.use(authMiddleware);

// Destinatarios
routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.show);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

// Entregadores
routes.get('/deliverymans', DeliverymanController.index);
routes.get('/deliverymans/:id', DeliverymanController.show);
routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:id', DeliverymanController.update);
routes.delete('/deliverymans/:id', DeliverymanController.delete);

// Entregas
routes.get('/deliveries', DeliveryController.index);
routes.get('/deliveries/:deliveryId', DeliveryController.show);
routes.post('/deliveries', DeliveryController.store);
routes.put('/deliveries/:id', DeliveryController.update);
routes.delete('/deliveries/:id', DeliveryController.delete);

// Upload de arquivos
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
