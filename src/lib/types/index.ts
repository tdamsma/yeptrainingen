
interface ImageSources {
    [key: string]: {
        sources: any;
        img: any;
    };
}

interface MemberMeta {
    name: string;
    volgnummer: number;
}

interface TeamMemberModule {
    path: string;
    meta: MemberMeta;
    content: {
        render: Function;
        $$render: Function;
    };
}

interface ImageModule {
    default: {
        sources: any;
        img: any;
    };
}
