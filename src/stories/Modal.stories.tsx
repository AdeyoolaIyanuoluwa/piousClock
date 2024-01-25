import React from 'react';
import { StoryFn } from '@storybook/react';
import { ModalProps } from '../types';
import  Modal  from '../components/Modal/index';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = (args: ModalProps) => (
  <Modal {...args}>
    <>
      <h3>Delete member?</h3>
      <p>Are you sure you want to delete this member?.</p>
    </>
  </Modal>
);

export const Default: StoryFn<ModalProps> = Template.bind({});

Default.args = {
  children: '',
  isShown: true,
  width: '514px',
};
