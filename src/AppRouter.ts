import {
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import App from './App'
import PortingPage from './porting/ui/components/PortingPage';
import LoginPage from './login/ui/components/LoginPage';

const rootRoute = createRootRoute({
  component: App,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LoginPage,
})

const portingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/porting',
  component: PortingPage,
})

const routeTree = rootRoute.addChildren([indexRoute, portingRoute])

export const appRouter = createRouter({routeTree});

declare module "@tanstack/react-router" {
  interface Register {
      router: typeof appRouter;
  }
}