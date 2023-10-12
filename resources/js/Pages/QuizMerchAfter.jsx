import React from 'react';

const QuizMerchAfter = ({ mostSelectedBundle }) => {
    return (
        <div>
            <h1>Hasil Quiz Merch</h1>
            <p>Nama Bundling: {mostSelectedBundle.name}</p>
            <img src={mostSelectedBundle.image_url} alt="Gambar Bundling" />
            <p>Desc: {mostSelectedBundle.desc}</p>
        </div>
    );
};

export default QuizMerchAfter;
