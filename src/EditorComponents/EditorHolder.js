import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";


const DEFAULT_INITIAL_DATA = {
    "time": new Date().getTime(),
    "blocks": [
        {
            "type": "header",
            "data": {
                "text": "This is the react editor, awesome, right?",
                "level":1,
            },
        }
    ]
}

const ejInstance = useRef();

const initEditor = () => {
    const editor = new EditorJS({
        holder:'editorjs',
        onReady: () => {
            ejInstance.current= editor;
        },
        autofocus: true,
        data: DEFAULT_INITIAL_DATA,
        onChange: async() => {

            let content = await editor.saver.save();
            console.log(content);
        }
    })
}


const EditorHolder = () => {
    useEffect(()=>{
        if(ejInstance.current===null){
            initEditor();
        }
        return ()=>{
            ejInstance?.current?.destroy();
            ejInstance.current= null;
        }
    }, [])
    return (
         <>
         <div id="editorjs"></div>
         </>
      );
}
 
export default EditorHolder;