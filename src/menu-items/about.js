// assets
import { IconNotebook, IconUser } from '@tabler/icons';

// constant
const icons = { IconNotebook, IconUser };

// ==============================||ABOUT MENU ITEMS ||============================== //

const about = {
    id: 'About Section',
    title: 'About',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Author and Contributors',
            type: 'item',
            url: '/about/author',
            icon: icons.IconUser,
            breadcrumbs: false
        },
        {
            id: 'state exams',
            title: 'State Exams',
            type: 'item',
            url: '/about/state-exams',
            icon: icons.IconNotebook,
            breadcrumbs: false
        }
    ]
};

export default about;
