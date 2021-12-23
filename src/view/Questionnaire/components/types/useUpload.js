import { useEffect, useState } from 'react'

const useUpload = ({ current: refClickCurrent}, { current: refDragCurrent}) => {
    const [data, setData ] = useState([false]);

    useEffect(() => {
        refClickCurrent?.addEventListener('click', e => {
            console.log('smacznej maczy')
        })
    
    
        refDragCurrent?.addEventListener( 'dragover', function ( event ) {
            console.log('smacznej over')
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';
    
        } );
    
        refDragCurrent?.addEventListener( 'dragenter', function () {
            console.log('smacznej enter')
            refDragCurrent.style.opacity = 0.5;
    
        } );
    
        refDragCurrent?.addEventListener( 'dragleave', function () {
            console.log('smacznej leave')
            refDragCurrent.style.opacity = 1;
    
        } );
    
        refDragCurrent?.addEventListener( 'drop', function ( event ) {
            console.log('smacznej drop')
            event.preventDefault();
    
            const reader = new FileReader();
            reader.addEventListener( 'load', function ( event ) {
    
                console.log(event.target.result);
                console.log(event.dataTransfer.files[ 0 ]);
    
            } );
    
            refDragCurrent.style.opacity = 1;
    
        } );
    }, [refClickCurrent])
    return [ data ]
}

export default useUpload
