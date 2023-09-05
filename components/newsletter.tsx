import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { HeadingH3, Paragraph } from './typography';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const mailchimpUrl =
  'https://buddyhead.us14.list-manage.com/subscribe/post?u=b0028bf7d89bfb68709186c92&id=f8f9b3de4c&f_id=008ebee0f0';

const Newsletter = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    try {
      console.log('data', data);
      const response = await axios.post(mailchimpUrl, data);
      console.log('response', response);
      setAlertMessage('Submitted');
      return response;
    } catch (error) {
      console.log('error in submitNewsletter', error);
    }
  };
  return (
    <div className="p-16 md:px-64 md:py-16 text-center">
      <HeadingH3>Newsletter</HeadingH3>
      <Paragraph>Sign up for updates</Paragraph>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="px-0 lg:px-32 xl:px-32">
          <Input
            className="mb-4"
            type="email"
            placeholder="test@example.com"
            {...register('email')}
          />
        </div>
        <Button variant="outline" type="submit">
          Submit
        </Button>
      </form>
      {alertMessage ? (
        <Alert variant="success">
          <AlertTitle>{alertMessage}</AlertTitle>
          {/* <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription> */}
        </Alert>
      ) : null}
    </div>
  );
};

export default Newsletter;
