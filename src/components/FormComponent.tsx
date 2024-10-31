import { FC, useState } from "react";
import styled from "styled-components";

import type { FormProps } from "antd";
import { Button, Form, Input, Spin } from "antd";

import { fetchData, FieldType } from "../requests/requests";

const { TextArea } = Input;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 2rem;
  padding: 2rem;
`;

const formStyle = {
  width: 350,
  minWidth: 250,
  maxWidth: 600,
  padding: "2rem",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
  borderRadius: "1rem",
  backgroundColor: "#ffffff",
};

interface FormComponentProps {
  setIncomingMessage: (message: string) => void;
}

const FormComponent: FC<FormComponentProps> = ({ setIncomingMessage }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: FormProps<FieldType>["onFinish"] = async (values) => {
    setIsLoading(true);

    const message = await fetchData(values);

    if (message) {
      setIncomingMessage(message);
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <h2>Form</h2>
      <Form
        name="basic"
        layout="vertical"
        style={formStyle}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Your name..." />
        </Form.Item>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Your email..." />
        </Form.Item>
        <Form.Item<FieldType>
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please input your message!" }]}
        >
          <TextArea
            maxLength={300}
            placeholder="Your message..."
            style={{ height: 50, resize: "vertical", maxHeight: 200 }}
          />
        </Form.Item>
        <Form.Item>
          <Button block disabled={isLoading} color="default" variant="solid" htmlType="submit">
            {isLoading ? <Spin size="small" /> : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default FormComponent;
