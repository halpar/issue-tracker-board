/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable sonarjs/no-duplicate-string */
import React, { useEffect, useState } from 'react';
import { Radio, Col, Row, DatePicker, Input, Form } from 'antd';
import { EllipsisOutlined, MessageOutlined, ShareAltOutlined, SortAscendingOutlined, PlusOutlined, ProjectOutlined } from '@ant-design/icons';
import moment from 'moment';
import { archiveTask, useTasks } from '../../../../utils/Hooks';
import { collatedTasks } from '../../../../utils/Constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../../../../utils/Helpers';
import { useSelectedProjectValue, useProjectsValue } from '../../../../utils/Context';
import ProjectDetailsPageStyles, {
    RadioWrapper,
    TitleWrapper,
    IconsWrapper,
    TasksWrapper,
    CancelButton,
    SubmitButton,
    AddTaskSection,
    AddTaskSectionFooter,
    CustomSelectbar,
} from './styles';
import { Text } from '../../../components/Typography/styles';
import Button from '../../../components/Button';
import { firebase } from '../../../../firebase';

const ProjectDetailsPage = () => {
    const { Option } = CustomSelectbar;
    const [form] = Form.useForm();

    let projectName = '';
    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { tasks, archivedTasks } = useTasks(selectedProject);
    const [showAddTask, setShowAddTask] = useState(false);
    const [showProjectsToAssign, setShowProjectsToAssign] = useState(false);
    const isUpcoming = window.location.pathname.includes('upcoming');
    const isInbox = window.location.pathname.includes('inbox');
    const isToday = window.location.pathname.includes('today');

    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;
    }

    if (projects && projects.length > 0 && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name;
    }

    useEffect(() => {
        document.title = `${projectName}: Todoist`;
    });

    const handleCancelTask = () => {
        form.resetFields();
        setShowAddTask(false);
    };

    const handleAddTask = (values) => {
        const taskNameFromInput = values.taskName;
        const selectBoxprojectId = values.taskSelectedProject;
        const taskDate = values.taskDate.format('DD/MM/YYYY');
        let projectId = selectedProject;

        if (selectBoxprojectId) {
            console.log('yo123');
            projectId = selectBoxprojectId;
        }

        return (
            taskNameFromInput &&
            projectId &&
            firebase
                .firestore()
                .collection('tasks')
                .add({
                    archived: false,
                    projectId,
                    task: taskNameFromInput,
                    date: taskDate,
                    userId: 'V3pZBCaVi8YBvIlXR4zB',
                })
                .then(() => {
                    handleCancelTask();
                })
        );
    };

    return (
        <ProjectDetailsPageStyles span={24}>
            <TitleWrapper align="middle" justify="space-between">
                <Text size="20px" color="dark-black">
                    {projectName}
                </Text>
                <IconsWrapper>
                    <MessageOutlined className="icons-styling" />
                    <ShareAltOutlined className="icons-styling margin-left" />
                    <SortAscendingOutlined className="icons-styling margin-left" />
                    <EllipsisOutlined className="icons-styling margin-left" />
                </IconsWrapper>
            </TitleWrapper>
            <TasksWrapper>
                <Col span={24}>
                    {isInbox
                        ? archivedTasks.map((task) => (
                              <RadioWrapper style={{ marginBottom: '12px' }}>
                                  <Radio key={task.id}>{task.task}</Radio>
                              </RadioWrapper>
                          ))
                        : tasks.map((task) => (
                              <RadioWrapper style={{ marginBottom: '12px' }}>
                                  <Radio key={task.id}>{task.task}</Radio>
                              </RadioWrapper>
                          ))}
                    {showAddTask && (
                        <AddTaskSection>
                            <Col span={24}>
                                <Form onFinish={(values) => handleAddTask(values)} form={form}>
                                    <Row style={{ height: '30px' }} align="middle">
                                        <Col span={20}>
                                            <Form.Item name="taskName" rules={[{ required: true, message: 'Please enter taskname' }]}>
                                                <Input placeholder="Type task you wish to complete" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={4}>
                                            <Form.Item name="taskDate" rules={[{ required: true, message: 'Please set Schedule' }]}>
                                                <DatePicker style={{ width: '100%' }} placeholder="Schedule" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <AddTaskSectionFooter align="middle" justify="space-between">
                                        <div>
                                            <SubmitButton type="secondary" htmlType="submit">
                                                Add Task
                                            </SubmitButton>
                                            <CancelButton onClick={() => handleCancelTask()} style={{ marginLeft: '12px' }}>
                                                Cancel
                                            </CancelButton>
                                        </div>
                                        <div className="flex-align-it">
                                            {showProjectsToAssign && (
                                                <Form.Item name="taskSelectedProject">
                                                    <CustomSelectbar placeholder="Select a project">
                                                        {projects.map((project) => (
                                                            <Option value={project.projectId} key={project.projectId}>
                                                                {project.name}
                                                            </Option>
                                                        ))}
                                                    </CustomSelectbar>
                                                </Form.Item>
                                            )}
                                            <Form.Item>
                                                <ProjectOutlined
                                                    className="icons-styling"
                                                    style={{ marginLeft: '12px', fontSize: '24px' }}
                                                    onClick={() => setShowProjectsToAssign(!showProjectsToAssign)}
                                                />
                                            </Form.Item>
                                        </div>
                                    </AddTaskSectionFooter>
                                </Form>
                            </Col>
                        </AddTaskSection>
                    )}
                    {isUpcoming || isToday || isInbox ? (
                        <Row />
                    ) : (
                        <Row>
                            <Button style={{ padding: '0px' }} onClick={() => setShowAddTask(!showAddTask)} type="link">
                                <PlusOutlined />
                                Add task
                            </Button>
                        </Row>
                    )}
                </Col>
            </TasksWrapper>
        </ProjectDetailsPageStyles>
    );
};

export default ProjectDetailsPage;
