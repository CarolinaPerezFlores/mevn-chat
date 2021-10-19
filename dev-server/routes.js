import taskRoutes from './api/task/task-routes';
import messagesRoutes from './api/message/message-routes';

export function registerRoutes(app) {
    // app.use('/api', taskRoutes);
    app.use('/api', messagesRoutes);
}