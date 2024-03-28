import { FC, lazy, LazyExoticComponent } from 'react';
import {
  Home20Regular,Home20Filled,
  Info20Regular,Info20Filled,
  bundleIcon,
  type FluentIcon,
} from '@fluentui/react-icons';

export type NavigationItem = {
  label: string;
  path: string;
  icon: FluentIcon;
  element: LazyExoticComponent<FC>;
  top: boolean;
};

export const pages: NavigationItem[] = [
  {
    label: '主页',
    path: '/',
    icon: bundleIcon(Home20Filled, Home20Regular),
    element: lazy(() => import('./Home')),
    top: false
  },
  {
    label: '登录',
    path: '/login',
    icon: bundleIcon(Home20Filled, Home20Regular),
    element: lazy(() => import('./Login')),
    top: true
  },
  {
    label: '关于',
    path: '/about',
    icon: bundleIcon(Info20Filled, Info20Regular),
    element: lazy(() => import('./About')),
    top: false
  }
];
