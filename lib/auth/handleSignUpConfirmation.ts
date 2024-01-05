import { confirmSignUp, type ConfirmSignUpInput } from 'aws-amplify/auth';

export default async function handleSignUpConfirmation({
  username,
  confirmationCode
}: ConfirmSignUpInput) {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username,
      confirmationCode
    });
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}