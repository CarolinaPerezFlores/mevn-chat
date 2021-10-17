import taskRoutes from './api/task/task-routes';

export function registerRoutes(app) {
    app.use('/api', taskRoutes);
}