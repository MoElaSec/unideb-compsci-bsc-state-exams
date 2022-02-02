// assets
import { IconList } from '@tabler/icons';

// constant
const icons = {
    IconList
};

// ==============================|| TOPICS MENU ITEMS ||============================== //

const topics = {
    id: 'topics',
    title: 'State Exmas',
    caption: 'Materials to study for state exams',
    type: 'group',
    children: [
        {
            id: 'Topics',
            title: 'Topics',
            type: 'collapse',
            icon: icons.IconList,

            children: [
                {
                    id: 'maths&comp',
                    title: 'Mathematics & Computer Science',
                    type: 'item',
                    url: '/state-exams/mathematics'
                },
                {
                    id: 'Informatics',
                    title: 'Informatics',
                    type: 'item',
                    url: '/state-exams/informatics'
                }
            ]
        }
    ]
};

export default topics;
