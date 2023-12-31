import React from 'react';
import EventQa from "@/components/EventQA";
import WaveDesign from "@/components/WaveDesign";
import variables from "@/app/variables.module.scss";

const QALIST = [
    {
        question: "What is the application process?",
        answer: "Please register through this form"
    },
    {
        question: "Will it be held online?",
        answer: "The first phase will be held online and hosted on Kaggle. The competition link is available from June 18, 2023. The final round will be held on the premises of the Department of CSE, BUET"
    }, {
        question: "Do I need to show any verification documents?",
        answer: "You might have to show verification documents at any stage of the competition if the DL Sprint 2.0 Organizing Committee wishes to verify you."
    }, {
        question: "Can someone use my name and participate in the competition?",
        answer: "No, we do not tolerate any kind of misrepresentation."
    }, {
        question: "Is this competition only for BUET students?",
        answer: "Nope. This is an open for all competiton, regardless of institution. Graduates and professionals can also join."
    }, {
        question: "Is there any age limit?",
        answer: "No."
    }
    , {
        question: "Are the participants required to attend the competition physically?",
        answer: "For the final onsite round, at least one member of the team should be present physically at the premises of Department of CSE, BUET."
    }, {
        question: "If I have more enquiries, where can I contact?",
        answer: "Please contact us via dlsprint2.0@buetcsefest2023.com. For queries related to the competition problem, please post it on the discussion of the Kaggle competition page of DL Sprint 2.0."
    }, {
        question: "When is the registration deadline?",
        answer: "TBA"
    }
]


function Qa(props) {
    return (
        <div className={"text-center pb-16 sm:pb-[15%] relative bg-color-white"}>
            <EventQa list={QALIST} />
            <WaveDesign position={"bottom-[-2px]"} color={variables.colorGray} />
        </div>
    );
}

export default Qa;