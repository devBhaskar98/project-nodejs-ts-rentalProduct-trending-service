import { Router, Request, Response } from 'express';
import { trendingRepository } from '@trendingService/repository';

const router = Router();

// POST: Create
router.post('/', async (req: Request, res: Response) => {
    try {
        const result = await trendingRepository.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error creating news' });
    }
});

// GET: Find All
router.get('/', async (req: Request, res: Response) => {
    try {
        const result = await trendingRepository.findAll();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching news' });
    }
});

// // GET: Find One
// router.get('/:id', async (req: Request, res: Response) => {
//     console.log(`GET request received to fetch record with ID: ${req.params.id}`);
//     res.json({ message: `Fetch action for ID: ${req.params.id}` });
// });

// // PUT: Update One
// router.put('/:id', async (req: Request, res: Response) => {
//     console.log(`PUT request received to update record with ID: ${req.params.id}`, req.body);
//     res.json({ message: `Update action for ID: ${req.params.id}`, data: req.body });
// });

// DELETE: Delete One
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        let newsId: number = `${req.params.id}` as unknown as number;
        const result = await trendingRepository.deleteOne(newsId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error creating news' });
    }
});

export default router;
