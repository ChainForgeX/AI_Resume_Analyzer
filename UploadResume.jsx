function UploadResume({

    setFile,
    uploadResume,
    loading

}){

    return(

        <div className="card">

            <h2>
                Upload Resume
            </h2>

            <input

                type="file"

                accept=".pdf"

                onChange={(e)=>

                    setFile(
                        e.target.files[0]
                    )

                }

            />

            <button

                onClick={
                    uploadResume
                }

            >

                {
                    loading
                    ?
                    "Analyzing..."
                    :
                    "Upload Resume"
                }

            </button>

        </div>

    );

}

export default UploadResume;