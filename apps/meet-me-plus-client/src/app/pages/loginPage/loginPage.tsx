import { FormProvider, useForm } from 'react-hook-form';
import TextField from '../../../components/fields/textField';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from './loginSchema';
import LavaLampBackground from '../../../components/lavaLampBackground/lavaLampBackground';

const LoginPage = () => {
  const methods = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const handleFormSubmit = (data: LoginSchema) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full bg-base-100">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleFormSubmit)}
          className="rounded-lg p-5 bg-accent flex flex-col gap-3 items-center"
        >
          <h1 className="text-neutral text-xl">Login</h1>
          <TextField
            inputProps={{
              ...methods.register('username'),
              placeholder: 'Username',
              type: 'text',
            }}
            Icon={() => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
            )}
          />
          <TextField
            inputProps={{
              ...methods.register('password'),
              placeholder: 'Password',
              type: 'password',
            }}
            Icon={() => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          />

          {/* <button type="submit" className="btn btn-primary">
              Login
              </button> */}
          <input type="submit" className="btn btn-primary" value="LOGIN" />
        </form>
      </FormProvider>
      <LavaLampBackground />
    </div>
  );
};

export default LoginPage;
