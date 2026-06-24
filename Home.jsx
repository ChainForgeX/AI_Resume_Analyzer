import { useState } from "react";

import API from "./api";

import UploadResume
from "./UploadResume";

import AnalysisCard
from "./AnalysisCard";

function Home() {

    const [file,setFile] =
        useState(null);

    const [
        analysis,
        setAnalysis
    ] = useState(null);

    const [
        loading,
        setLoading
    ] = useState(false);

    const uploadResume =
    async()=>{

        if(!file){

            alert(
                "Select Resume"
            );

            return;

        }

        try{

            setLoading(true);

            const formData =
                new FormData();

            formData.append(
                "resume",
                file
            );

            const response =
                await API.post(

                    "/resume/upload",

                    formData

                );

            setAnalysis(
                response.data
            );
            
        }
        catch(error){

            console.log(error);

        }
        finally{

            setLoading(false);

        }

    };

    return(

    <div className="container">

        <h1 className="title">
            AI Resume Analyzer
        </h1>

        <UploadResume

            file={file}

            setFile={setFile}

            uploadResume={uploadResume}

            loading={loading}

        />

        {

    analysis && (

        <>

            <AnalysisCard

                analysis={
                    analysis
                }

            />

            <button

                onClick={() => {

                    setAnalysis(
                        null
                    );

                    setFile(
                        null
                    );

                }}

            >

                Analyze Another Resume

            </button>

        </>

    )

}

    </div>

);

}

export default Home;
