import { WelcomePage } from './components/WelcomePage';
import { MaterialUIPage } from './components/material-ui/';
import { ChakraUIPage } from './components/chakra-ui/';
import { AntDesignPage } from './components/ant-design';
import { ReactSpringPage } from './components/react-spring';
import { FramerMotionPage } from './components/framer-motion'; 
import { GSAPReactPage } from './components/gsap';
import { OtherLibsPage } from './components/other-libs';

type RouterType = {
  path: string;
  label: string;
  Component: () => JSX.Element;
};


export const routes: RouterType[] = [
  {
    path: '/',
    label: 'Welcome',
    Component: WelcomePage,
  },
  {
    path: '/material-ui',
    label: 'MaterialUI',
    Component: MaterialUIPage,
  },
  {
    path: '/chakra-ui',
    label: 'ChakraUI',
    Component: ChakraUIPage,
  },
  {
    path: '/ant-design',
    label: 'Ant Design',
    Component: AntDesignPage,
  },
  {
    path: '/react-spring',
    label: 'React Spring',
    Component: ReactSpringPage,
  },
  {
    path: '/framer-motion',
    label: 'Framer Motion',
    Component: FramerMotionPage,
  },
  {
    path: '/gsap-react',
    label: 'GSAP',
    Component: GSAPReactPage,
  },
  {
    path: '/other-react-libs',
    label: 'Other Libs',
    Component: OtherLibsPage,
  },
];

