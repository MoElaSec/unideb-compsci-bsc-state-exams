// assets
import { IconHelp, IconBrandYoutube, IconFile } from '@tabler/icons';

// constant
const icons = { IconHelp, IconBrandYoutube, IconFile };

// ==============================|| OTHER MENU ITEMS ||============================== //

const other = {
    id: 'others',
    type: 'group',
    children: [
        {
            id: 'youtube',
            title: 'Youtube/Video Links',
            type: 'item',
            url: '/youtube-links',
            icon: icons.IconBrandYoutube
        },
        {
            id: 'docs',
            title: 'Other Docs',
            type: 'item',
            url: '/other-docs',
            icon: icons.IconFile
        },
        {
            id: 'contribution',
            title: 'Contribution',
            type: 'item',
            url: '/contribution',
            icon: icons.IconHelp
        }
    ]
};

export default other;
