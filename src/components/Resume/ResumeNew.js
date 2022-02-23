import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

import pdf from "../../Assets/Resume.pdf";

import { AiOutlineDownload } from "react-icons/ai";
import {pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return (
    <div>
     
          <Button style={{ marginBottom: "12px" }} variant="primary" href={pdf} download="Syed Abdul Hadi Resume">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        
    </div>
  );
}

export default ResumeNew;
