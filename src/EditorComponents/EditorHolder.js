import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";
import { Header } from "@editorjs/header";
const DEFAULT_INITIAL_DATA = {
    "time": new Date().getTime(),
    "blocks": [
        { 
            "type": "header",
            "data": {
                "text": "This is my editor",
                "level":1,
            }
        },
    ]
}

const EditorHolder = () => {
    const ejInstance = useRef();


    useEffect(()=>{
        if(ejInstance.current===null){
            initEditor();
        }
        return ()=>{
            ejInstance?.current?.destroy();
            ejInstance.current= null;
        }
    }, [])
    const initEditor = () => {    
        const editor = new EditorJS({
            holder:'editorjs',
            onReady: () => {
                ejInstance.current= editor;
            },
            data: DEFAULT_INITIAL_DATA,
            onChange: async() => {
    
                let content = await editor.saver.save();
                console.log(content);
            },
            autofocus: true,



            tools: {
                header: Header,
            }


         


         
        });
    }

  
    return (
         <>
         <div id="editorjs"></div>
         </>
      );
}
 
export default EditorHolder;