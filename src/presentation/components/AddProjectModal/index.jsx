/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Form, Row, Col, message } from 'antd';
import ModalStyles, { FooterStyles, StyledInput, SubmitButton, CancelButton, ContentStyles } from './styles';
import { Text } from '../Typography/styles';
import { firebase } from '../../../firebase';
import { generatePushId } from '../../../utils/Helpers';
import { useSelectedProjectValue, useProjectsValue } from '../../../utils/Context';

const AddProjectModal = (props) => {
    const { visible, onCancel, handleCancelCalled, setIsModalVisible } = props;
    const [form] = Form.useForm();
    const { projects, setProjects } = useProjectsValue();

    const validateMessages = {
        required: '${label} is required!',
    };

    const Title = ({ text }) => (
        <Text color="dark-black" weight="bold">
            {text}
        </Text>
    );

    const handleAddProjectSubmit = (values) => {
        console.log(values, 'hellosubmit');
        const projectId = generatePushId();
        const projectObjWillbeCreated = {
            projectId,
            name: values.projectName,
            userId: 'V3pZBCaVi8YBvIlXR4zB',
        };
        try {
            firebase
                .firestore()
                .collection('projects')
                .add(projectObjWillbeCreated)
                .then(() => {
                    setProjects([]);
                    form.resetFields();
                    message.success(`${projectObjWillbeCreated.name} is created successfully`);
                });
        } catch (error) {
            message.success(`Oops , something went wrong try again`);
        }
    };

    return (
        <ModalStyles title={<Title text="Add a New Project" />} {...props}>
            <Col span={24}>
                <Form onFinish={(values) => handleAddProjectSubmit(values)} validateMessages={validateMessages} form={form} layout="vertical">
                    <ContentStyles>
                        <Form.Item rules={[{ required: true }]} label="Project name" name="projectName">
                            <StyledInput size="large" placeholder="Please input project name" />
                        </Form.Item>
                    </ContentStyles>
                    <FooterStyles align="middle" justify="end">
                        <CancelButton htmlType="submit">Cancel</CancelButton>
                        <SubmitButton style={{ marginLeft: '12px' }} type="secondary" htmlType="submit">
                            Add
                        </SubmitButton>
                    </FooterStyles>
                </Form>
            </Col>
        </ModalStyles>
    );
};

export default AddProjectModal;
