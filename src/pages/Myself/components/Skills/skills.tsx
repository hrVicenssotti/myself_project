import {
    IconBootstrap,
    IconCss,
    IconDocker,
    IconExpressJS,
    IconFigma,
    IconGit,
    IconHtml,
    IconJavascript,
    IconLinux,
    IconMongo,
    IconMui,
    IconMysql,
    IconNestJS,
    IconNextJS,
    IconNodeJS,
    IconPhp,
    IconPostgres,
    IconReactJS,
    IconSymfony,
    IconTypescript,
    IconVela,
    IconViteJS,
} from '../../../../components';

interface SkillsProps {
    link: string;
    placeholder: string;
    icon: React.ReactNode;
}

export const skills: Array<SkillsProps> = [
    {
        icon: <IconJavascript />,
        link: 'https://developer.mozilla.org/docs/Web/JavaScript',
        placeholder: 'Javascript',
    },
    {
        icon: <IconTypescript />,
        link: 'https://www.typescriptlang.org/',
        placeholder: 'Typescript',
    },
    {
        icon: <IconPhp />,
        link: 'https://www.php.net/',
        placeholder: 'PHP',
    },
    {
        icon: <IconNodeJS />,
        link: 'https://nodejs.org/',
        placeholder: 'NodeJS',
    },
    {
        icon: <IconReactJS />,
        link: 'https://react.dev/',
        placeholder: 'ReactJS',
    },
    {
        icon: <IconExpressJS />,
        link: 'https://expressjs.com/',
        placeholder: 'ExpresJS',
    },
    {
        icon: <IconNestJS />,
        link: 'https://nestjs.com/',
        placeholder: 'NestJS',
    },
    {
        icon: <IconNextJS />,
        link: 'https://nextjs.org/',
        placeholder: 'NextJS',
    },
    {
        icon: <IconSymfony />,
        link: 'https://symfony.com/',
        placeholder: 'Symfony',
    },
    {
        icon: <IconMui />,
        link: 'https://mui.com/',
        placeholder: 'Material UI',
    },
    {
        icon: <IconBootstrap />,
        link: 'https://getbootstrap.com/',
        placeholder: 'Bootstrap',
    },
    {
        icon: <IconCss />,
        link: 'https://developer.mozilla.org/docs/Web/css',
        placeholder: 'CSS',
    },
    {
        icon: <IconHtml />,
        link: 'https://developer.mozilla.org/docs/Web/html',
        placeholder: 'HTML',
    },
    {
        icon: <IconMysql />,
        link: 'https://www.mysql.com/',
        placeholder: 'MYSQL',
    },
    {
        icon: <IconPostgres />,
        link: 'https://www.postgresql.org/',
        placeholder: 'PostgreSQL',
    },
    {
        icon: <IconMongo />,
        link: 'https://mongodb.com/',
        placeholder: 'MongoDB',
    },
    {
        icon: <IconDocker />,
        link: 'https://docker.com/',
        placeholder: 'Docker',
    },
    {
        icon: <IconViteJS />,
        link: 'https://vitejs.dev/',
        placeholder: 'ViteJS',
    },
    {
        icon: <IconVela />,
        link: 'https://go-vela.github.io/docs/',
        placeholder: 'Vela',
    },
    {
        icon: <IconLinux />,
        link: 'https://www.linux.org/',
        placeholder: 'GNU/Linux',
    },
    {
        icon: <IconGit />,
        link: 'https://git-scm.com/',
        placeholder: 'Git',
    },
    {
        icon: <IconFigma />,
        link: 'https://www.figma.com/',
        placeholder: 'Figma',
    },
];
