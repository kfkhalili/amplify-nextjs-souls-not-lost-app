// amplify/auth/resource.ts
import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * When used alongside data, it is automatically configured as an auth provider for data
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: "LINK",
      verificationEmailBody: (link: string) =>
        `Welcome to Souls Not Lost. 
         Click the link to verify: ${link}.`,
      verificationEmailSubject: "Souls Not Lost Verification Email",
    },
    // add social providers
    externalProviders: {
      /**
       * first, create your secrets using `amplify sandbox secret`
       * then, import `secret` from `@aws-amplify/backend`
       * @see https://docs.amplify.aws/gen2/deploy-and-host/sandbox-environments/features/#setting-secrets
       */
      // loginWithAmazon: {
      //   clientId: secret('LOGINWITHAMAZON_CLIENT_ID'),
      //   clientSecret: secret('LOGINWITHAMAZON_CLIENT_SECRET'),
      // }
    },
  },
  /**
   * enable multifactor authentication
   * @see https://docs.amplify.aws/gen2/build-a-backend/auth/manage-mfa
   */
  // multifactor: {
  //   mode: 'OPTIONAL',
  //   sms: {
  //     smsMessage: (code) => `Your verification code is ${code}`,
  //   },
  // },
  userAttributes: {
    /** request additional attributes for your app's users */
    // profilePicture: {
    //   mutable: true,
    //   required: false,
    // },
  },
});
