export type Interview = {
    summary: string;
    sections: {
        summary: string;
        conversation: {
            interviewer?: string;
            interviewee?: string;
            text: string;
        }[];
    }[];
};
