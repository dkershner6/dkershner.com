import React from 'react';

import SiteWrapper from '../../../components/common/SiteWrapper';
import Resume from '../../../components/resumes/Resume';

const ResumeDisplay = () => {
    return (
        <SiteWrapper>
            <Resume company="g5" />
        </SiteWrapper>
    );
};

export default ResumeDisplay;
