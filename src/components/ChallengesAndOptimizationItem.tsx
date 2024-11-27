import { FC } from "react";

export interface IChallengeAndOptimizationItem {
    title: string;
    context: string;
    problem: string;
    investigationAndApproach: string;
    solution: string;
    results: string;
}

const ChallengeAndOptimizationItem: FC<{
    challengeAndOptimizationItem: IChallengeAndOptimizationItem;
}> = ({ challengeAndOptimizationItem }) => {
    return (
        <div
            className="mt-5 flex flex-col rounded-md hover:bg-[#6881cb] transition-all
            duration-1000 py-10 px-4 text-white  shadow-md"
        >
            <h3 className="text-lg font-bold mb-3">{challengeAndOptimizationItem.title}</h3>
            <div className="mb-2">
                <h4 className="font-semibold">Context:</h4>
                <p className="text-sm text-gray-200">{challengeAndOptimizationItem.context}</p>
            </div>
            <div className="mb-2">
                <h4 className="font-semibold">Problem:</h4>
                <p className="text-sm text-gray-200">{challengeAndOptimizationItem.problem}</p>
            </div>
            <div className="mb-2">
                <h4 className="font-semibold">Investigation & Approach:</h4>
                <p className="text-sm text-gray-200">{challengeAndOptimizationItem.investigationAndApproach}</p>
            </div>
            <div className="mb-2">
                <h4 className="font-semibold">Solution:</h4>
                <p className="text-sm text-gray-200">{challengeAndOptimizationItem.solution}</p>
            </div>
            <div>
                <h4 className="font-semibold">Results:</h4>
                <p className="text-sm text-gray-200">{challengeAndOptimizationItem.results}</p>
            </div>
        </div>
    );
};

export default ChallengeAndOptimizationItem;
