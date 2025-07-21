export interface Portfolio {
    _id: string;
    name: string;
    title: string;
    phone: string;
    email: string;
    linkedin: string;
    location: string;
    skills: {
        primary: string[];
        other: string[];
    };
    certifications: string[];
    education: {
        degree: string;
        specialization: string;
        year: string;
        university: string;
    }[];
    work_experience: {
        position: string;
        company: string;
        technologies: string[];
        start_date: string;
        end_date: string;
    }[];
}
