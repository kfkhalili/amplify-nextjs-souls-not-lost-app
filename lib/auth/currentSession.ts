import { fetchAuthSession } from 'aws-amplify/auth';

async function currentSession() {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
  } catch (err) {
    console.log(err);
  }
}