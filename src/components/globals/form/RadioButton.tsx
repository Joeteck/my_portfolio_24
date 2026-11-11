type FileUploadProps = {
    onFileSelect: (file: File) => void;
};

const FileUpload = ({ onFileSelect }: FileUploadProps) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        onFileSelect(e.target.files[0]);
    }
    };

    return <input type="file" onChange={handleFileChange} className="file-upload" />;
};

export default FileUpload;
