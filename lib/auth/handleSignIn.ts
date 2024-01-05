import { signIn, type SignInInput } from 'aws-amplify/auth';

export default async function handleSignIn({ username, password }: SignInInput) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
  } catch (error) {
    console.log('error signing in', error);
  }
}