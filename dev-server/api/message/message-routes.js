import express from 'express';
const router = express.Router();
import * as controller from './message-controller';

router.get('/', controller.index);
router.get('/:id', controller.search);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);
router.post('/deletedb', controller.deletedb);

export default router;