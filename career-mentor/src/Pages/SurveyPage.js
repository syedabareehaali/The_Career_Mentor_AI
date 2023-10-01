import React from 'react';
import Survey from '../components/Questionnaire/Survey';
function SurveyPage({ questions }) {
    return (
        <div>
            <Survey questions={questions} />
        </div>
    );
}

export default SurveyPage;