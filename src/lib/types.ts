export interface ImageSources {
    [key: string]: {
        sources: any;
        img: any;
    };
}

export interface TeamMemberMeta {
    name: string;
    volgnummer: number;
}

export interface TeamMemberModule {
    default: {
        render: Function;
        $$render: Function;
    };
    metadata: TeamMemberMeta;
}
export interface TeamMember {
    path: string;
    meta: TeamMemberMeta;
    content: {
        render: Function;
        $$render: Function;
    };
}

export interface ImageModule {
    default: {
        sources: any;
        img: any;
    };
}


export interface BlogMeta {
    title: string;
    img: string;
    alt: string;
    date: string;
    intro: string;
    credits: string;
    tags: string[];
    categories: string[];
    english_title: string;
}
export interface BlogModule {
    default: {
        render: Function;
        $$render: Function;
    }
    metadata: BlogMeta;
}
export interface Blog {
    path: string;
    name: string;
    meta: BlogMeta;
    content: {
        render: Function;
        $$render: Function;
    };
}

export interface TrainingMeta {
    title: string;
    img: string;
    alt: string;
    volgnummer: number;
}
export interface Training {
    path: string;
    name: string;
    meta: TrainingMeta;
    content: {
        render: Function;
        $$render: Function;
    };
}
export interface TrainingModule {
    default: {
        render: Function;
        $$render: Function;
    };
    metadata: TrainingMeta;
}
export interface CoachingMeta {
    title: string;
    img: string;
    alt: string;
}
export interface Coaching {
    path: string;
    name: string;
    meta: CoachingMeta;
    content: {
        render: Function;
        $$render: Function;
    };
}
export interface CoachingModule {
    default: {
        render: Function;
        $$render: Function;
    };
    metadata: CoachingMeta;
}