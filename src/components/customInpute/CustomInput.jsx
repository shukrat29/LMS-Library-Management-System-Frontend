import React from "react";
import { Form } from "react-bootstrap";

export const CustomInput = ({ label, inputRef, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} ref={inputRef} />
    </Form.Group>
  );
};
