/* eslint-disable sonarjs/no-identical-functions */
import React, { useState } from 'react';
import { Col, Radio, Tooltip, message } from 'antd';
import { MailOutlined, MailFilled } from '@ant-design/icons';
import TaskStyles, { TaskWrapper } from './styles';
import { firebase } from '../../../../../firebase';

const Tasks = ({ archivedTasks, tasks }) => {
    const isUpcoming = window.location.pathname.includes('upcoming');
    const isInbox = window.location.pathname.includes('inbox');
    const isToday = window.location.pathname.includes('today');

    const handleCompleteTask = (task) => {
        try {
            firebase
                .firestore()
                .collection('tasks')
                .doc(task.id)
                .delete()
                .then(() => {
                    message.success(`${task.task} is completed successfully`);
                });
        } catch (error) {
            message.error(`Oops... ${task.task} cannot be completed at the moment , try again`);
        }
    };
    const changeArchivedStatus = (task) => {
        try {
            firebase
                .firestore()
                .collection('tasks')
                .doc(task.id)
                .update({
                    archived: !task.archived,
                })
                .then(() => {
                    message.success(`${task.task} is archived successfully`);
                });
        } catch (error) {
            message.error(`Oops... ${task.task} cannot be completed at the moment , try again`);
        }
    };

    return (
        <TaskStyles>
            <Col span={24}>
                {isInbox
                    ? archivedTasks.map((task) => (
                          <TaskWrapper align="middle" justify="space-between" style={{ marginBottom: '12px' }}>
                              <Radio onClick={() => handleCompleteTask(task)} key={task.id}>
                                  {task.task}
                              </Radio>
                              <Tooltip placement="top" title="Delete from archives">
                                  <MailFilled onClick={() => changeArchivedStatus(task)} className="icon-styles" />
                              </Tooltip>
                          </TaskWrapper>
                      ))
                    : tasks.map((task) => (
                          <TaskWrapper align="middle" justify="space-between" style={{ marginBottom: '12px' }}>
                              <Radio onClick={() => handleCompleteTask(task)} key={task.id}>
                                  {task.task}
                              </Radio>
                              <Tooltip title="Add to archives">
                                  <MailOutlined onClick={() => changeArchivedStatus(task)} className="icon-styles" />
                              </Tooltip>
                          </TaskWrapper>
                      ))}
            </Col>
        </TaskStyles>
    );
};

export default Tasks;
