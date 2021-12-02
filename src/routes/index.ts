import { Router } from 'express';
const indexRouter = Router();

indexRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
      res.send('Error: Invalid id');
      return;
    }
    res.send(`Recieved id: ${id}`);
});

export default indexRouter;
