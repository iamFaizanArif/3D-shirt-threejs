import React from 'react';
import CustomButton from "./CustomButton.jsx";
// eslint-disable-next-line react/prop-types
const FilePicker = ({file,setFile,readFile}) => {
    return (
        <div className="filepicker-container">
          <div className="flex-1 flex flex-col">
              <input id="file-upload"
                     type="file"
                     accept="image/*"
                     onChange={(e)=>setFile(e.target.files[0])}
              />
              <label htmlFor="file-upload" className="filepicker-label">
                  Upload File
              </label>
              <p className="mt-2 text-gray-500 text-xs truncate">
                  {/* eslint-disable-next-line react/prop-types */}
                  {file===""?"No File Selected":file.name}
              </p>
          </div>
            <div className="flex flex-wrap gap-3 mt-4">
                <CustomButton type="outline"
                              title="Logo"
                              handleClick={()=>readFile("logo")}
                              customStyles="text-xs"
                />
                <CustomButton type="filled"
                              title="Full"
                              handleClick={()=>readFile("full")}
                              customStyles="text-xs"
                />
            </div>
        </div>
    );
};

export default FilePicker;
