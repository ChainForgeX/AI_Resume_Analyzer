function AnalysisCard({

    analysis

}){

    if(!analysis )
        return null;

    return(

        <>

            <div className="card">

                <h2>
                    ATS Score
                </h2>

                <p className="score">

                    {
                        analysis.atsScore
                    }

                </p>

            </div>

            <div className="card">

                <h2 className="section-title">
                    Strengths
                </h2>

                <ul>

                    {

                        analysis.strengths.map(

                            (
                                item,
                                index
                            )=>(

                                <li
                                    key={index}
                                >

                                    {item}

                                </li>

                            )

                        )

                    }

                </ul>

            </div>

            <div className="card">

                <h2 className="section-title">
                    Weaknesses
                </h2>

                <ul>

                    {

                        analysis.weaknesses.map(

                            (
                                item,
                                index
                            )=>(

                                <li
                                    key={index}
                                >

                                    {item}

                                </li>

                            )

                        )

                    }

                </ul>

            </div>

            <div className="card">

                <h2 className="section-title">
                    Suggestions
                </h2>

                <ul>

                    {

                        analysis.suggestions.map(

                            (
                                item,
                                index
                            )=>(

                                <li
                                    key={index}
                                >

                                    {item}

                                </li>

                            )

                        )

                    }

                </ul>

            </div>

        </>

    );

}

export default AnalysisCard;