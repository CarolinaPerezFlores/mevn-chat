import express from 'express';
const router = express.Router();

router.post('/task', (req, res)=>{
    res.send('post.task');
});
router.get('/task', (req, res)=>{
    res.send('get.task');
});
router.get('/task:id', (req, res)=>{
    res.send('get.id.task')
});
router.put('/task', (req, res)=>{
    res.send('put.task');
});
router.delete('/task', (req, res)=>{
    res.send('delete.task');
});

export default router;