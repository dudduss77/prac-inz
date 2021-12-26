import { useEffect, useState } from 'react'
import { b64toBlob } from '../helpers';

const useImageUpload = (refClick, refDrag, initialState = [], errFunction = console.log ) => {
    const [data, setData ] = useState(initialState);

    const deleteImage = indx => {
        setData(prev => prev.filter((item, i) => i!=indx))
    }

    const handleDragOver = e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }

    const handleDragEnter  = e => {
        e.srcElement.style.opacity = 0.5;

    }

    const handleDragLeave = e => {
        e.srcElement.style.opacity = 1;
    }

    const readSingleFile = item => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener( 'load',  ({target : { result }}) => {
                resolve(result)
            } );
            reader.readAsDataURL(item);            
        })

    }
    const handleDrop = async (e) => {
        e.preventDefault();
        const tmp = [];
        const fileTypes = ["jpg","jpeg", "png"];
        const fileArr = e.currentTarget.files != undefined ? Array.from(e.currentTarget.files) : Array.from(e.dataTransfer.files);
        for(let i = 0; i<fileArr.length; i++) {
            const extension = fileArr[i].name.split('.').pop().toLowerCase();
            if(fileTypes.indexOf(extension)<0) continue;
            tmp.push(await readSingleFile(fileArr[i]));
        }
        setData(prev => [...prev, ...tmp])

        if(e.srcElement) handleDragLeave(e);

    }
    
    const handleUploadClick = () => fileInputElement.click()

    const fileInputElement = document.createElement('input');
    fileInputElement.type = 'file';
    fileInputElement.multiple="multiple";
    fileInputElement.accept="image/jpg, image/jpeg";
    fileInputElement.addEventListener('change',handleDrop,true);

    useEffect(() => {
        const { current:refClickCurrent } = refClick;
        const { current:refDragCurrent } = refDrag;

        refClickCurrent?.addEventListener('click', handleUploadClick);
        refDragCurrent?.addEventListener( 'dragover', handleDragOver);
        refDragCurrent?.addEventListener( 'dragenter', handleDragEnter );
        refDragCurrent?.addEventListener( 'dragleave', handleDragLeave);
        refDragCurrent?.addEventListener( 'drop', handleDrop);

        return () => {
            refClickCurrent?.removeEventListener('click', handleUploadClick);
            refDragCurrent?.removeEventListener( 'dragover', handleDragOver);
            refDragCurrent?.removeEventListener( 'dragenter', handleDragEnter );
            refDragCurrent?.removeEventListener( 'dragleave', handleDragLeave);
            refDragCurrent?.removeEventListener( 'drop', handleDrop);
          };
    })
    return [ data, deleteImage ]
}

export default useImageUpload
