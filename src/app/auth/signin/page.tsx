'use client';

import { signIn, getProviders } from 'next-auth/react';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Chrome, Users, AlertCircle } from 'lucide-react';

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

function SignInForm() {
  const [providers, setProviders] = useState<Record<string, Provider> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  const handleSignIn = async (providerId: string) => {
    setIsLoading(true);
    try {
      await signIn(providerId, {
        callbackUrl,
        redirect: true,
      });
    } catch (error) {
      console.error('Sign in error:', error);
      setIsLoading(false);
    }
  };

  const getProviderIcon = (providerId: string) => {
    switch (providerId) {
      case 'google':
        return <Chrome className="h-5 w-5" />;
      case 'github':
        return <Github className="h-5 w-5" />;
      default:
        return <Users className="h-5 w-5" />;
    }
  };

  const getProviderColor = (providerId: string) => {
    switch (providerId) {
      case 'google':
        return 'bg-red-600 hover:bg-red-700 text-white';
      case 'github':
        return 'bg-gray-900 hover:bg-gray-800 text-white';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <Users className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to VSM Stand-ups
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Access your virtual stand-up meeting platform
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>
              Sign in with your preferred account to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <div className="flex">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Authentication Error
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      {error === 'OAuthSignin' && 'Error occurred during sign in.'}
                      {error === 'OAuthCallback' && 'Error occurred during callback.'}
                      {error === 'OAuthCreateAccount' && 'Could not create account.'}
                      {error === 'EmailCreateAccount' && 'Could not create account.'}
                      {error === 'Callback' && 'Error occurred during callback.'}
                      {error === 'OAuthAccountNotLinked' && 
                        'Account is already linked to another user.'}
                      {error === 'EmailSignin' && 'Check your email for a sign in link.'}
                      {error === 'CredentialsSignin' && 'Invalid credentials.'}
                      {error === 'default' && 'An error occurred. Please try again.'}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {providers ? (
              <div className="space-y-3">
                {Object.values(providers).map((provider) => (
                  <Button
                    key={provider.name}
                    onClick={() => handleSignIn(provider.id)}
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center space-x-2 ${getProviderColor(provider.id)}`}
                  >
                    {getProviderIcon(provider.id)}
                    <span>
                      {isLoading ? 'Signing in...' : `Continue with ${provider.name}`}
                    </span>
                  </Button>
                ))}
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-2 text-sm text-gray-600">Loading sign in options...</p>
              </div>
            )}

            <div className="text-center">
              <p className="text-xs text-gray-500">
                By signing in, you agree to our terms of service and privacy policy
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SignIn() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SignInForm />
    </Suspense>
  );
}