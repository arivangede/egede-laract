import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import testFile from "@/assets/perdes/PERDES NO. 5 THN 2023 TTG PER. APBDESA TA 2023.pdf";
import CustomModal from "@/Components/Modal";

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <span className="loading loading-dots loading-lg text-error" />
        </div>
    );
};

const PDFfile = ({ data }) => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const initialZoom = 0.68;
    const [zoom, setZoom] = useState(initialZoom);

    const handleZoomIn = () => {
        setZoom((prevZoom) => prevZoom * 1.2); // Sesuaikan faktor zoom sesuai kebutuhan
    };

    const handleZoomOut = () => {
        setZoom((prevZoom) => prevZoom / 1.2); // Sesuaikan faktor zoom sesuai kebutuhan
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const onPageChange = (offset) => {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    };

    const openModal = () => {
        setIsModalOpen(true);
        setZoom(initialZoom);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <p className="font-bold">
                Page {pageNumber} of {numPages}
            </p>
            <Document
                file={"/storage/" + data}
                onLoadSuccess={onDocumentLoadSuccess}
                className={"max-h-500"}
                loading={<Loading />}
            >
                <Page
                    pageNumber={pageNumber}
                    height={500}
                    className={"bg-transparent"}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    loading={<Loading />}
                    onClick={openModal}
                />
            </Document>
            <div className="flex items-center justify-between w-full">
                <button
                    className="btn"
                    onClick={() => onPageChange(-1)}
                    disabled={pageNumber <= 1 ? true : false}
                >
                    prev
                </button>
                <button
                    onClick={() => onPageChange(+1)}
                    className="btn"
                    disabled={pageNumber >= numPages ? true : false}
                >
                    next
                </button>
            </div>

            <CustomModal isOpen={isModalOpen} onRequestClose={closeModal}>
                <Document
                    file={"/storage/" + data}
                    loading={<Loading />}
                    className={"w-full h-screen flex flex-col"}
                >
                    <Page
                        pageNumber={pageNumber}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        scale={zoom}
                    />
                    <button
                        className="fixed right-4 bottom-16 btn w-12 h-10 text-xl"
                        onClick={handleZoomIn}
                        disabled={zoom > 1.17 ? true : false}
                    >
                        +
                    </button>
                    <button
                        className="fixed right-4 bottom-4 btn w-12 h-10 text-xl"
                        onClick={handleZoomOut}
                        disabled={zoom < 0.7 ? true : false}
                    >
                        -
                    </button>
                </Document>
            </CustomModal>
        </>
    );
};

export default PDFfile;
