import type { Preview } from '@storybook/react';
import * as NextImage from 'next/image';
import React from 'react';
import '../src/app/globals.css';
import { AuthProvider } from '../src/state/auth/AuthContext';



// adding a handler so that Storybook can handle Next's <Image> component without crashing
const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => (<OriginalNextImage {...props} unoptimized />),
// });

// use decorators: export a const called decorators which React component(s) you want as a wrapper around all your stories.
export const decorators = [
  (Story: React.ReactNode) => (
    <AuthProvider>
      <Story />
    </AuthProvider>
  )
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: { viewports: customViewports },
    // use this way before next.js 13
    // nextRouter: {
    //   Provider: RouterContext.Provider,
    // },

    // by this way When using Next.js 13+
    // If you have the actions addon,
    // you can interact with the links and see the route change events there
    nextjs: {
      appDirectory: true,
      router: {
        basePath: '/',
      },
    }
  },
};

export default preview;
