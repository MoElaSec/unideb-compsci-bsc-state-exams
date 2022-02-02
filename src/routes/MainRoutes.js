import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const AboutAuthor = Loadable(lazy(() => import('views/about/author')));
const AboutStateExams = Loadable(lazy(() => import('views/about/state-exams')));
const StateExamsMathematics = Loadable(lazy(() => import('views/state-exams/mathematics-compsci')));
const StateExamsInformatics = Loadable(lazy(() => import('views/state-exams/informatics')));
const YoutubeLinks = Loadable(lazy(() => import('views/youtube-links')));
const Contribution = Loadable(lazy(() => import('views/contribution')));
const OtherDocs = Loadable(lazy(() => import('views/other-docs')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <AboutAuthor />
        },
        {
            path: '/about/author',
            element: <AboutAuthor />
        },
        {
            path: '/about/state-exams',
            element: <AboutStateExams />
        },
        {
            path: '/youtube-links',
            element: <YoutubeLinks />
        },
        {
            path: '/state-exams/mathematics',
            element: <StateExamsMathematics />
        },
        {
            path: '/state-exams/informatics',
            element: <StateExamsInformatics />
        },
        {
            path: '/other-docs',
            element: <OtherDocs />
        },
        {
            path: '/contribution',
            element: <Contribution />
        }
    ]
};

export default MainRoutes;
