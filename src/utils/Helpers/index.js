import { collatedTasks } from '../Constants';

export const collatedTasksExist = (selectedProject) => {
    collatedTasks.find((task) => task.key === selectedProject);
};
