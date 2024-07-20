import { Router } from 'express';
import User from './controllers/User.js';
import Teams from './controllers/Teams.js';

const router = new Router();


router.post('/signup', User.register);
router.post('/login', User.login);
router.post('/logout', User.logout);

router.get('/teams', Teams.getAll);
router.post('/createTeam', User.createTeam);

export default router;


