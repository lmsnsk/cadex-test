import { FC, useState } from "react";
import styled from "styled-components";

import type { FormProps } from "antd";
import { Button, Form, Input, Spin } from "antd";

import { fetchData, FieldType } from "../requests/requests";
import { opacity } from "../lib/helper";

const { TextArea } = Input;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  border-radius: 2rem;
  padding: 2rem;
`;

const Message = styled.p`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  animation: ${opacity} 1s linear;
`;

const formStyle = {
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
  borderRadius: "1rem",
  padding: "2rem",
  width: 400,
  minWidth: 320,
  maxWidth: 600,
  backgroundColor: "#ffffff",
};

const FormComponent: FC = () => {
  const [incomingMessage, setIncomingMessage] = useState("");
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
    <Container>
      {incomingMessage ? (
        <Message>{incomingMessage}</Message>
      ) : (
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
      )}
    </Container>
  );
};

export default FormComponent;
