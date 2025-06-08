import express, { Router, Response, Request } from 'express';
import path from 'path';
// import UserRoutes from './UserRoutes';

/******************************************************************************
                                Setup
******************************************************************************/

// ** Add AdminRouter ** //
const adminApp = path.resolve(process.cwd(), 'dist/client/browser/index.html');

// Init router
const AdminRouter = Router();
// Get all users
// AdminRouter.get(Paths.Users.Get, UserRoutes.getAll);
// AdminRouter.post(Paths.Users.Add, UserRoutes.add);
// AdminRouter.put(Paths.Users.Update, UserRoutes.update);
// AdminRouter.delete(Paths.Users.Delete, UserRoutes.delete);

AdminRouter.get('/', (_: Request, res: Response) => {
  res.sendFile(adminApp);
});
AdminRouter.get('*splat', (_: Request, res: Response) => {
  res.sendFile(adminApp);
});

// AdminRouter.use(Paths.Admin.Base, apiRouter);

// const apiRouter = Router();
/******************************************************************************
                                Export default
******************************************************************************/

export default AdminRouter;
