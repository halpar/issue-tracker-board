/* eslint-disable default-case */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import {
    MailOutlined,
    CalendarOutlined,
    BookOutlined,
    DeleteOutlined,
    ProjectOutlined,
    ExclamationCircleOutlined,
    PlusCircleOutlined,
} from '@ant-design/icons';
import { Menu, Modal, message, Row } from 'antd';
import SiderStyles from './styles';
import { useSelectedProjectValue, useProjectsValue } from '../../../../utils/Context';
import { firebase } from '../../../../firebase';
import { Text } from '../../Typography/styles';
import AddProjectModal from '../../AddProjectModal';

const { SubMenu } = Menu;

const siderData = [
    {
        title: 'Inbox',
        path: '/inbox',
        icon: <MailOutlined />,
    },
    {
        title: 'Today',
        path: '/today',
        icon: <CalendarOutlined />,
    },
    {
        title: 'Next 7 Days',
        path: '/upcoming',
        icon: <BookOutlined />,
    },
];

const Sider = () => {
    const history = useHistory();
    const isCollapsed = useSelector((state) => state.sidebarStateStore.isCollapsed);
    const { selectedProject, setSelectedProject } = useSelectedProjectValue();
    const { projects, setProjects } = useProjectsValue();
    const [showModal, setShowModal] = useState(false);

    const handleDeleteProject = (projectObj) => {
        try {
            firebase
                .firestore()
                .collection('projects')
                .doc(projectObj.docId)
                .delete()
                .then(() => {
                    setProjects([...projects]);
                    setSelectedProject('INBOX');
                });
            message.success(`${projectObj.name} is deleted successfully`);
        } catch (error) {
            message.error(`Oops... ${projectObj.name} cannot be deleted at the moment , try again`);
        }
    };

    function confirmModal(projectData) {
        Modal.confirm({
            title: 'Caution',
            icon: <ExclamationCircleOutlined />,
            content: `You are about to delete ${projectData.name} are you sure?`,
            okText: 'Yep , im ok with that',
            cancelText: 'Nope , sorry about that',
            onOk: () => handleDeleteProject(projectData),
        });
    }

    const handleMenuSubItemClick = (projectObj) => {
        setSelectedProject(projectObj.projectId);
        console.log(projectObj, 'whats');
        history.push(`/customer/project-details/${projectObj.projectId}`);
    };

    const handleMenuTitleClick = (path, title) => {
        switch (title) {
            case 'Inbox':
                setSelectedProject('INBOX');
                history.push(`/customer${path}`);
                break;
            case 'Today':
                setSelectedProject('TODAY');
                history.push(`/customer${path}`);
                break;
            case 'Next 7 Days':
                setSelectedProject('NEXT_7');
                history.push(`/customer${path}`);
        }
    };

    const handleCancelModal = () => {
        setShowModal(false);
    };

    return (
        <SiderStyles width="300px" collapsed={isCollapsed}>
            <div className="logo" />
            <Menu mode="inline">
                {siderData.map(({ title, path, icon }) => (
                    <Menu.Item key={title} icon={icon} onClick={() => handleMenuTitleClick(path, title)}>
                        {title}
                    </Menu.Item>
                ))}
                <SubMenu icon={<ProjectOutlined />} key="submenu-projects" title="Projects">
                    {projects?.map((project) => (
                        <Menu.Item
                            className="menu-item-styles"
                            icon={<DeleteOutlined data-test-id="delete-project" onClick={() => confirmModal(project)} />}
                            key={project.id}
                            data-doc-id={project.docId}
                            data-test-id="project-action"
                            onClick={() => handleMenuSubItemClick(project)}>
                            {project.name}
                        </Menu.Item>
                    ))}
                    <Menu.Item onClick={() => setShowModal(true)} className="menu-item-styles add-new-project-styles">
                        <PlusCircleOutlined style={{ paddingLeft: '12px' }} />{' '}
                        <Text className="hover-text" size="12px">
                            Add project
                        </Text>
                    </Menu.Item>
                </SubMenu>
            </Menu>
            <AddProjectModal visible={showModal} setIsModalVisible={setShowModal} onCancel={handleCancelModal} />
        </SiderStyles>
    );
};

export default Sider;

// onClick={() => history.push(`/customer${path}`)
