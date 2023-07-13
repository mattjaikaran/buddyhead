---
to: forms/<%= h.changeCase.lower(type) %>/<%= h.changeCase.pascal(name) %>/index.tsx
arbitrary: <% name = null, type = null, hasStyles = false %>
---
import { useForm, SubmitHandler } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface <%= h.changeCase.pascal(name) %>Inputs {
  example: string,
  exampleRequired: string,
};

const <%= h.changeCase.pascal(name) %> = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<<%= h.changeCase.pascal(name) %>Inputs>();
  const onSubmit: SubmitHandler<<%= h.changeCase.pascal(name) %>Inputs> = data => console.log(data);

  console.log(watch("example")) // watch input value by passing the name of it
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" defaultValue="test" {...register("example")} />
        <Form.Text className="text-muted">
          Lorem
        </Form.Text>
      </Form.Group>

      {/* include validation with required or other standard HTML validation rules */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && (
          <Form.Text className="text-muted">
            Lorem Ipsum
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default <%= h.changeCase.pascal(name) %>