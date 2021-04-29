/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { firebase } from '../../firebase';
import { collatedTasksExist } from '../Helpers';

// Get user's tasks
export const useTasks = (selectedProject) => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase.firestore().collection('tasks').where('userId', '==', 'V3pZBCaVi8YBvIlXR4zB');

        unsubscribe =
            selectedProject && !collatedTasksExist(selectedProject)
                ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
                : selectedProject === 'TODAY'
                ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY')))
                : selectedProject === 'INBOX' || selectedProject === 0
                ? (unsubscribe = unsubscribe.where('archived', '==', true))
                : unsubscribe;

        unsubscribe = unsubscribe.onSnapshot((snapshot) => {
            const newTasks = snapshot.docs.map((task) => ({
                id: task.id,
                ...task.data(),
            }));

            setTasks(
                selectedProject === 'NEXT_7'
                    ? newTasks.filter((task) => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 && task.archived !== true)
                    : newTasks.filter((task) => task.archived !== true)
            );
            setArchivedTasks(newTasks.filter((task) => task.archived !== false));
        });

        return () => unsubscribe();
    }, [selectedProject]);

    return { tasks, archivedTasks };
};

// Get user's projects

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .where('userId', '==', 'V3pZBCaVi8YBvIlXR4zB')
            .orderBy('projectId')
            .get()
            .then((snapshot) => {
                const allProjects = snapshot.docs.map((project) => ({
                    ...project.data(),
                    docId: project.id,
                }));

                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    setProjects(allProjects);
                }
            });
    }, [projects]);
    return { projects, setProjects };
};

// Update task by id

export const archiveTask = (taskId) => {
    firebase.firestore().collection('tasks').doc(taskId).update({
        archived: true,
    });
};
