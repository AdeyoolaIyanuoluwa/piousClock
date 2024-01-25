import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import Input from '../components/Input';
import { InputProps } from '../types';
import { StoryFn } from "@storybook/react";

export default {
    title: 'Components/Input',
    component: Input
};

const initialValues = {
    email: ''
};

const Template = (args: any) => {
    const [value, setValue] = useState('');
    return (
        <Formik initialValues={initialValues} onSubmit={() => { }}>
            {() => (
                <Form>
                    <div style={{ width: '500px' }}>
                        <Input
                            {...args}
                            control='input'
                            title="Email address"
                            name="email"
                            value={value}
                            onChange={(e: any) => setValue(e.target.value)}
                            type="text"
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

const PasswordTemplate = (args: any) => {
    return (
        <Formik
            initialValues={{ password: '' }}
            onSubmit={() => { }}>
            {() => (
                <Form>
                    <div style={{ width: '500px' }}>
                        <Input {...args} type="password" />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export const DefaultInput: StoryFn<InputProps> = Template.bind({});
export const PasswordInput: StoryFn<InputProps> = PasswordTemplate.bind({});

DefaultInput.args = {
    name: 'email',
    type: 'email',
    title: 'Email'
};

PasswordInput.args = {
    name: 'password',
    type: 'password',
    title: 'Password'
};
